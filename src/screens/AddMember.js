import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthContext';
import {getDepartments, getRoles, addEmployee} from '../sevices/api';
import {Picker} from '@react-native-picker/picker';

import MaterialIcon from 'react-native-vector-icons/Ionicons';

const AddEmployee = () => {
  const {userId} = useContext(AuthContext);
  const navigation = useNavigation();

  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartments(userId);
        setDepartments(response);
      } catch (error) {
        console.error('Error fetching departments', error);
      }
    };
    fetchDepartments();
  }, [userId]);

  const handleDepartmentChange = async departmentId => {
    setSelectedDepartment(departmentId);
    const response = await getRoles(userId, departmentId);
    setRoles(response);
  };

  const handleAddEmployee = async () => {
    try {
      const response = await addEmployee(userId, {
        name,
        email,
        department_id: selectedDepartment,
        role: selectedRole,
      });
      console.log('Employee added:', response);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };
  return (
    <View style={{backgroundColor: Colors.pureWhite}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: Colors.pureWhite,
        }}>
        <Text style={{color: Colors.darkGray, fontSize: 20}}>New Employee</Text>
        <TouchableOpacity onPress={handleAddEmployee}>
          <Text style={{color: Colors.black, fontSize: 13}}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', padding:20, gap:30}}>
        <View
          style={{
            width: 45 * 1.5,
            height: 45 * 1.5,
            borderRadius: 25,
            backgroundColor: Colors.yellow,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcon name="person" size={40} color={Colors.darkGreen} />
        </View>
        <View style={{flex:1, gap:5}}>

        <TextInput
          style={{
            color: Colors.black,
            borderBottomColor: Colors.black,
            borderBottomWidth: 1,
            fontSize:15,
            padding: 0,
          }}
          cursorColor={Colors.orange}
          placeholderTextColor={Colors.mediumGray}
          placeholder="Full name required"
          value={name}
          onChangeText={setName}
        />
        <TextInput 
         style={{
            color: Colors.black,
            borderBottomColor: Colors.black,
            borderBottomWidth: 1,
         
            fontSize:15
          }}
          cursorColor={Colors.orange}
          placeholderTextColor={Colors.mediumGray}
        placeholder="Email" value={email} onChangeText={setEmail} />
        <View style={styles.pickerContainer}>

        <Picker
          style={styles.picker}
            placeholderTextColor={Colors.mediumGray}

          placeholder='Department'

          selectedValue={selectedDepartment}
          onValueChange={handleDepartmentChange}>
          {departments.map(dept => (
            <Picker.Item
              style={{backgroundColor: Colors.pureWhite, color: Colors.black}}
              key={dept.id}
              label={dept.name}
              value={dept.id}
            />
          ))}
        </Picker>
        <MaterialIcon style={styles.picker} name='chevron-down-outline' color={Colors.lessGray}></MaterialIcon>
        </View>
      
      <View style={styles.pickerContainer}>
      <Picker
          style={styles.picker}
          selectedValue={selectedRole}
          onValueChange={setSelectedRole}
        >
          <Picker.Item label="Select Role" value="" />
          {roles.map(role => (
            <Picker.Item
              style={{ backgroundColor: Colors.pureWhite, color: Colors.black }}
              key={role.id}
              label={role.name}
              value={role.name}
            />
          ))}
        </Picker>
        <MaterialIcon style={styles.picker} name='chevron-down-outline' color={Colors.lessGray}></MaterialIcon>
      </View>
        
        </View>

       
      </View>
    </View>
  );
};


const styles=  StyleSheet.create({
    pickerContainer: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',

        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
      },
      picker: {
        width: '90%',
        color: Colors.black,
      },
      dropdownIcon: {
       
        color: Colors.black,
      },
})
export default AddEmployee;
