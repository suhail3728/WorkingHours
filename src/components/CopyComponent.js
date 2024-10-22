import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
// import MaterialIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors'; // Adjust this path

const CopyBusinessId = ({ businessId }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!businessId) return; // Guard clause for null businessId
    Clipboard.setString(businessId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    Alert.alert("Copied", "Business ID copied to clipboard");
  };

  return (
    <TouchableOpacity 
      onPress={handleCopy}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.gray, // Using your color scheme
        padding: 8,
        borderRadius: 8,
        gap: 8,
        marginTop: 4,
      }}
      disabled={!businessId}
    >
      <Text style={{ 
        fontSize: 14,
        color: Colors.black, // Using your color scheme
      }}>
        #business_id
      </Text>
      {/* <MaterialIcon 
        name={copied ? "checkmark" : "copy-outline"} 
        size={16} 
        color={copied ? Colors.darkGreen : Colors.black}
      /> */}
    </TouchableOpacity>
  );
};

export default CopyBusinessId;