import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Colors from '../constants/colors';
import { addRoles} from '../sevices/api';

const AddRole = ({ route, navigation }) => {
  const { userId, departmentId } = route.params;
  const [role, setRole] = useState('');
  const [addRole, setAddRole] =useState(false);

  const handleAddRole = async () => {
    try {
      console.log(userId);
      console.log('department id:',departmentId);
      const response = await addRole(userId,departmentId, role);
      console.log('Department added:', response);
      setAddRole(true);
    } catch (error) {
      console.error('Error adding department', error);
      console.log(addRole);
    }
  };

  useEffect(() => {
    if (addRole) {
      navigation.goBack();
    }
  }, [addRole, navigation]);

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "android" ? "padding" : "height"}
    style={{ flex: 1 }}
  >
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
        <Text style={{ color: Colors.darkGray, fontSize: 20 }}>Add Role</Text>
        <TouchableOpacity onPress={handleAddRole}>
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
        <Text style={{ color: Colors.darkGray }}>Role Name</Text>
        <TextInput
          style={{ borderBottomColor: Colors.black, borderBottomWidth: 1, width: 150, padding: 0 }}
          color={Colors.darkGray}
          cursorColor={Colors.orange}
          value={role}
          onChangeText={setRole}
        />
      </View>
    </View>

  </KeyboardAvoidingView>
   
  );
};

export default AddRole;
