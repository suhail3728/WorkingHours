import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getHello } from '../services/api';

   const HelloComponent: React.FC = () => {
     const [message, setMessage] = useState<string>('');
     const [error, setError] = useState<string>('');

     const fetchHello = async () => {
       try {
         const data = await getHello();
         setMessage(data.message);
         setError('');
       } catch (err) {
         setError('Failed to fetch message');
         console.error(err);
       }
     };

     useEffect(() => {
       fetchHello();
     }, []);

     return (
       <View>
         {message ? <Text style={{ color: 'red' }}>{message}</Text> : null}
         {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
         <Button title="Refresh" onPress={fetchHello} />
       </View>
     );
   };

   export default HelloComponent;