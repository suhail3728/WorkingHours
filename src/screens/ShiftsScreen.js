import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthContext';
import {getShifts} from '../sevices/api';

const organizeShiftsByDate = (shifts) => {
  if (!Array.isArray(shifts)) return [];
  
  const groupedShifts = shifts.reduce((acc, shift) => {
    const shiftDate = new Date(shift.date).toISOString().split('T')[0];
    if (!acc[shiftDate]) {
      acc[shiftDate] = [];
    }
    acc[shiftDate].push(shift);
    return acc;
  }, {});

  return Object.entries(groupedShifts)
    .map(([date, shifts]) => ({
      date,
      displayDate: formatDisplayDate(date),
      shifts: shifts.sort((a, b) => new Date(a.start) - new Date(b.start))
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

const formatDisplayDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
};

const formatTime = (timeString) => {
  return new Date(timeString).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

const ShiftGroup = ({dateGroup}) => {
  return (
    <View style={styles.dateGroup}>
      <View style={styles.dateHeader}>
        <Text style={styles.dateText}>{dateGroup.displayDate}</Text>
        <View style={styles.employeeCount}>
          <MaterialIcon name="account-outline" size={20} color={Colors.black} />
          <Text style={styles.countText}> {dateGroup.shifts.length}</Text>
        </View>
      </View>
      {dateGroup.shifts.map((shift) => (
        <View key={shift.id} style={styles.shiftCard}>
          <Text style={styles.employeeName}>{shift.employee?.name}</Text>
          <Text style={styles.shiftTime}>
            {formatTime(shift.start)} - {formatTime(shift.end)}
          </Text>
          <Text style={styles.roleText}>
            {shift.role?.name} / {shift.department?.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

const ShiftsScreen = () => {
  const {userId, emplyFlag} = useContext(AuthContext);
  const navigation = useNavigation();
  const [shifts, setShifts] = useState([]);
  const [organizedShifts, setOrganizedShifts] = useState([]);

  const fetchShifts = async () => {
    try {
      const response = await getShifts(userId);
      setShifts(response);
      setOrganizedShifts(organizeShiftsByDate(response));
    } catch (error) {
      console.error('failed to get shift details', error);
    }
  };

  useEffect(() => {
    fetchShifts();
  }, [userId]);

  useFocusEffect(
    React.useCallback(() => {
      fetchShifts();
    }, [userId]),
  );
  
  const currentMonth = new Date().toLocaleDateString('default', {
    month: 'long',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.monthSelector}>
            <Text style={styles.monthText}> {currentMonth}</Text>
            <MaterialIcon name="chevron-down" size={20} color={Colors.darkGray} />
          </View>
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcon
              name="calendar-month-outline"
              color={Colors.darkGray}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon name="plus" color={Colors.darkGray} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.locationHeader}>
        <View style={styles.locationInfo}>
          <MaterialIcon
            name="map-marker-outline"
            color={Colors.darkerBlue}
            size={20}
          />
          <Text style={styles.locationText}> Cheese factory</Text>
        </View>
        <MaterialIcon name="tune" color={Colors.black} size={20} />
      </View>

      <ScrollView style={styles.scrollView}>
        {organizedShifts.map((dateGroup) => (
          <ShiftGroup key={dateGroup.date} dateGroup={dateGroup} />
        ))}
       {!emplyFlag && (
  <TouchableOpacity
    style={styles.createButton}
    onPress={() => navigation.navigate('CreateShifts')}
  >
    <Text style={styles.createButtonText}>Create new shift</Text>
  </TouchableOpacity>
       )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pureWhite,
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    color: Colors.darkGray,
    fontSize: 18,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: Colors.black,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: -30,
  },
  dateGroup: {
    backgroundColor: Colors.gray,
    padding: 20,
    marginBottom: 2,
  },
  dateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  employeeCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    color: Colors.black,
  },
  shiftCard: {
    backgroundColor: Colors.pureWhite,
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  employeeName: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  shiftTime: {
    color: Colors.darkGray,
    fontSize: 14,
    marginBottom: 4,
  },
  roleText: {
    color: Colors.lessGray,
    fontSize: 13,
  },
  createButton: {
    borderColor: Colors.borderLight,
    borderWidth: 1,
    padding: 10,
    margin: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: Colors.lessGray,
  },
});

export default ShiftsScreen;