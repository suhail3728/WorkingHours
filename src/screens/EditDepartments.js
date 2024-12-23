import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Colors from '../constants/colors';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getUser, getDepartments, getRoles} from '../sevices/api';
import {DepartmentButton} from '../components/CustomButton';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const EditDepartments = ({route}) => {
  const {userId} = route.params;
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments(userId);
      console.log(response);
      setDepartments(response);
    } catch (error) {
      console.error('Error fetching department details', error);
    }
  };
  
  useEffect(() => {
    fetchDepartments();


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

    loadUser();
  }, [userId]);
  useFocusEffect(
    React.useCallback(() => {
      fetchDepartments();
    }, [userId]),
  );

  return (
    <SafeAreaView>
      <ScrollView>
    <View>
       
      <DepartmentButton
        IconBackgroundColor={Colors.darkBlue}
        IconName={'location-outline'}
        IconColor={Colors.pureWhite}
        title={user ? user.business : 'Eggs and cheese'}></DepartmentButton>

      <DepartmentButton
        IconSize={40}
        IconColor={Colors.lessGray}
        IconName={'add-circle-outline'}
        title="Add Department"
        onPress={() => navigation.navigate('AddDepartment', {userId: userId})}
        style={{paddingLeft: 50}}></DepartmentButton>
      <FlatList
        data={departments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <View>
                <DepartmentItem
            userId={userId}
            department={item}
            navigation={navigation}
          ></DepartmentItem>
                <DepartmentButton
      IconSize={40}
      IconColor={Colors.lessGray}
      IconName={'add-circle-outline'}
      title="Add Roles"
      onPress={() => navigation.navigate('AddRole', {userId: userId, departmentId:item.id})}
      style={{paddingLeft: 60}}></DepartmentButton>
      
            </View>
          
        )}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const DepartmentItem = ({userId, department, navigation }) =>{
    const departmentId = department.id;
    const [roles, setRoles] = useState([]);
    const fetchRoles = async () => {
        try {
          const response = await getRoles(userId, departmentId);
          console.log(response);
          setRoles(response);
          return response;
        } catch (error) {
          console.error('Unable to fetch the roles', error);
        }
      };
      useEffect(()=> {
        fetchRoles();
      }, [userId,departmentId]

      );
      useFocusEffect(
        React.useCallback(() => {
          fetchRoles();
        }, [userId,departmentId]),
      );
      return(
        <View>
      <DepartmentButton
        style={{ paddingLeft: 50}}
        IconBackgroundColor={Colors.darkerGreen}
        IconName={'flower-outline'}
        IconColor={Colors.pureWhite}
        title={department.name}></DepartmentButton>
        <FlatList 
        data={roles}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <View>
  <DepartmentButton
            style={{paddingLeft:60}}
            IconBackgroundColor={Colors.yellow}
            IconName={'leaf-outline'}
            IconColor={Colors.darkGray}
            title={item.name}
            ></DepartmentButton>
            
         

            </View>
          
            
        )}
        />
      </View>
      );


}

{/* <View>
<DepartmentButton
  style={{paddingLeft: 50}}
  IconBackgroundColor={Colors.darkerGreen}
  IconName={'flower-outline'}
  IconColor={Colors.pureWhite}
  title={departments ? item.name : 'Department x'}></DepartmentButton>
  

  </View> */}



export default EditDepartments;
