import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import {AuthContext} from '../navigation/AuthContext';
import Colors from '../constants/colors';

import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createShifts, getDepartments, getEmployees, getRoles, getUser} from '../sevices/api';
import {CustomButton} from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const CreateShifts = () => {
    const navigation = useNavigation();
  const {userId} = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [user, setUser] = useState('');
  const loadUser = async () => {
    try {
      console.log(userId);
      const user = await getUser(userId);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.error('Error loading userdata', error);
    }
  };

  const handleAddShifts = async () => {
    try {
      const response = await createShifts(userId, {
        department: selectedDepartment,
        role: selectedRole,
        date: selectedDate,
        start: startTime,
        end: endTime,
        employee: selectedEmployee,
        place: user.business,
      });

      console.log('shift published', response);
      navigation.goBack();
    } catch (error) {
      console.error('unable to publish shift', error);
    }
  };

  useEffect(() => {
    loadDepartments();
    loadUser();
  }, [userId]);

  const loadDepartments = async () => {
    try {
      const response = await getDepartments(userId);
      setDepartments(response);
    } catch (error) {
      console.error('Failed to get departments', error);
    }
  };

  const loadRoles = async departmentId => {
    try {
      const response = await getRoles(userId, departmentId);
      setRoles(response);
    } catch (error) {
      console.error('Failed to get roles', error);
    }
  };

  const loadEmployees = async (departmentId, roleName) => {
    try {
      const response = await getEmployees(userId, departmentId, roleName);
      setEmployees(response);
    } catch (error) {
      console.error('Failed to get employees', error);
    }
  };

  const handleDepartmentSelect = department => {
    setSelectedDepartment(department);
    setShowDepartmentModal(false);
    loadRoles(department.id);
  };

  const handleRoleSelect = role => {
    setSelectedRole(role);
    setShowRoleModal(false);
    console.log(selectedDepartment);
    loadEmployees(selectedDepartment.id, role.name);
  };

  const handleEmployeeSelect = employee => {
    setSelectedEmployee(employee);
    setShowEmployeeModal(false);
  };

  const renderModal = (visible, onClose, title, data, onSelect) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcon name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{title}</Text>
          </View>
          {data.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.modalItem}
              onPress={() => onSelect(item)}>
              <Text style={{color: Colors.black}}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Where</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{user ? user.business : 'Eggs and cheese'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Department</Text>
        <TouchableOpacity onPress={() => setShowDepartmentModal(true)}>
          <Text style={styles.value}>
            {selectedDepartment ? selectedDepartment.name : 'Select Department'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>When</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.value}>{selectedDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Start Time</Text>
        <TouchableOpacity onPress={() => setShowStartTimePicker(true)}>
          <Text style={styles.value}>
            {startTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>End Time</Text>
        <TouchableOpacity onPress={() => setShowEndTimePicker(true)}>
          <Text style={styles.value}>
            {endTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Who</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Role</Text>
        <TouchableOpacity onPress={() => setShowRoleModal(true)}>
          <Text style={styles.value}>
            {selectedRole ? selectedRole.name : 'Select Role'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Employee</Text>
        <TouchableOpacity onPress={() => setShowEmployeeModal(true)}>
          <Text style={styles.value}>
            {selectedEmployee ? selectedEmployee.name : 'Select Employee'}
          </Text>
        </TouchableOpacity>
        
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>

      <CustomButton
          title={'Publish'}
          backgroundColor={Colors.orange}
          onPress={handleAddShifts}
          textColor={Colors.white}
          borderColor={Colors.orange}></CustomButton>

      </View>


      {renderModal(
        showDepartmentModal,
        () => setShowDepartmentModal(false),
        'Select Department',
        departments,
        handleDepartmentSelect,
      )}
      {renderModal(
        showRoleModal,
        () => setShowRoleModal(false),
        'Select Role',
        roles,
        handleRoleSelect,
      )}
      {renderModal(
        showEmployeeModal,
        () => setShowEmployeeModal(false),
        'Select Employee',
        employees,
        handleEmployeeSelect,
      )}

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setSelectedDate(selectedDate);
          }}
        />
      )}
      {showStartTimePicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowStartTimePicker(false);
            if (selectedTime) setStartTime(selectedTime);
          }}
        />
      )}
      {showEndTimePicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowEndTimePicker(false);
            if (selectedTime) setEndTime(selectedTime);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pureWhite,
    padding: 20,
  },
  sectionTitle: {
    color: Colors.lessGray,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    color: Colors.black,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.pureWhite,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lessGray,
  },
});

export default CreateShifts;
