import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {FloatingAction} from 'react-native-floating-action';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import {AuthContext} from '../navigation/AuthContext';
import {getEmployees} from '../sevices/api';
import { FlatList } from 'react-native-gesture-handler';
import { CustomIconButton } from '../components/CustomButton';



const MyTeamScreen = () => {
  const {userId} = useContext(AuthContext);
  const navigation = useNavigation();
  const [employees, setEmployees] = useState('');
  const loadEmployees = async () => {
    try {
      const employeesdata = await getEmployees(userId);
    
      setEmployees(employeesdata);
    } catch (error) {
      console.error('Hey failed to getemplooyes in the myteam page', error);
    }
  };

  useEffect(() => {
     loadEmployees();
  }, [userId]);

  useFocusEffect(
    React.useCallback(() => {
      loadEmployees();
    }, [userId]),
  );

  return (
    <View style={{flex: 1, backgroundColor: Colors.pureWhite}}>
        <FlatList
        data={employees}
        keyExtractor={item => item.id}
        renderItem={({item})=>(

            <CustomIconButton
            name={'person'}
            title=
            {item.name}></CustomIconButton>
        )}
        />
      <FloatingAction
        onPressMain={() => navigation.navigate('AddMember')}
        color={Colors.orange}
        floatingIcon={<MaterialIcon name="add" size={24} color="white" />}
        position="right"
        distanceToEdge={16}
      />
    </View>
  );
};

export default MyTeamScreen;
