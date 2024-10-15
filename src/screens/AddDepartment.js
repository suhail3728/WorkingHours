import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../constants/colors';
import { addDepartment} from '../sevices/api';

const AddDepartment = ({ route, navigation }) => {
  const { userId } = route.params;
  const [department, setDepartment] = useState('');
  const [departmentAdded, setDepartmentAdded] = useState(false);

  const handleAddDepartment = async () => {
    try {
      console.log(userId);
      const response = await addDepartment(userId, department);
      console.log('Department added:', response);
      setDepartmentAdded(true);
    } catch (error) {
      console.error('Error adding department', error);
      console.log(departmentAdded)
    }
  };

  useEffect(() => {
    if (departmentAdded) {
      navigation.goBack();
    }
  }, [departmentAdded, navigation]);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: Colors.pureWhite,
        }}
      >
        <Text style={{ color: Colors.darkGray, fontSize: 20 }}>Add Department</Text>
        <TouchableOpacity onPress={handleAddDepartment}>
          <Text style={{ color: Colors.black, fontSize: 13 }}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          alignItems: 'flex-end',
          gap: 60,
          backgroundColor: Colors.pureWhite,
        }}
      >
        <Text style={{ color: Colors.darkGray }}>Department Name</Text>
        <TextInput
          style={{ borderBottomColor: Colors.black, borderBottomWidth: 1, width: 150, padding: 0 }}
          color={Colors.darkGray}
          cursorColor={Colors.orange}
          value={department}
          onChangeText={setDepartment}
        />
      </View>
    </View>
  );
};

export default AddDepartment;
