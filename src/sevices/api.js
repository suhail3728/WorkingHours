import axios from 'axios';
import { reporter } from '../../metro.config';
const API_URL = 'http://192.168.0.12:5000/';

const apiService = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});



export const createUser = async (userData) => {
  try {
    const response = await apiService.post('/api/user', {
        email: userData.email,
        userId: userData.id,  
        name: userData.name,
        business: userData.business,
        mobileNumber: userData.mobileNumber,
        position: userData.position,
        address: userData.address,
        businessType: userData.businessType,
        numberOfEmployees: userData.numberOfEmployees,
      });

    return {
      success: true,    
      userData: response.data,
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const addDepartment  = async(userId, department) => {
  try {
    
    const response =  await apiService.post(`/api/user/${userId}/department`, {
   
      name: department,
    });
    return response.data;

  }
  catch(error) {
    console.error('Error adding departement',error);
    throw error;
  }

};

export const getDepartments = async (userId) => {
  try{

    const response = await apiService.get(`/api/get_departments/${userId}/departments`);
  return response.data;
  }
  catch (error){
    console.error('Error fetchinng departments', error);
    throw error;
  }
  
}

export const addRoles = async (userId, departmentId, roleName) =>{
  try {
    const response = await apiService.post(`/api/${userId}/department/${departmentId}/role`,{
      name: roleName,

    });
  return response.data;
  }
    catch (error) {
      console.error('Unable to add the role sorry ', error);
      throw error;
    }
  }

  export const getRoles = async(userId, departmentId) => {
    try {
      const response = await apiService.get(`/api/${userId}/department/${departmentId}/role`);
      return response.data;
    }
    catch (error){
      console.error('unable to fetch the roles', error);
      
    }
  };
  
  export const addEmployee = async (userId, employeeData) =>{
    try {
      const response = await apiService.post(`/api/user/${userId}/employee`, employeeData);
      return response.data;
    }
    catch(error) {
      console.error('Failed to create user: ', error);
      throw error;
    }
  };

  export const createShifts = async (userId, shiftData)=>{
    try {
      const response = await apiService.post(`/api/user/${userId}/shifts`, shiftData);
      return response.data;
    }
    catch (error) {
      console.error('Failed to creater user:', error);
      throw error;
    }
  };

  export const getEmployees = async (userId) => {

    try {
      const response = await apiService.get(`/api/${userId}/employee`);
    return response.data;

    }
    catch (error ) {
      console.error('failed to get employees', error);
      throw error;
    }

    
  };


export const getUser = async (userId) => {
    try {
        const response = await apiService.get(`/api/getuser/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:',error);
        throw error;
    }
};

