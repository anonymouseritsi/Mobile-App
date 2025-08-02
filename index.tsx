import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
  if (!firstName || !lastName || !email) {
    alert('Please fill out all fields.');
    return;
  }
  setFirstName('');
  setLastName('');
  setEmail('');
  alert(`Submmited!`);
};

const handleClear = () => {
  setFirstName('');
  setLastName('');
  setEmail('');
  alert('All fields cleared!');
};

const handleGreet = () => {
  alert(`Hi ${firstName || 'Guest'}! 👋`);
};

  return (
    <View> 
      <Text>First Name:
      <TextInput
        placeholder=" Enter first name "
        value={firstName}
        onChangeText={setFirstName}
      />
      </Text>

      <Text>Last Name:
      <TextInput
        placeholder=" Enter last name "
        value={lastName}
        onChangeText={setLastName}
      />
      </Text>

      <Text >Email:
      <TextInput
        placeholder=" Enter email "
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      </Text>

      <View >
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Clear"  onPress={handleClear} />
        <Button title="Greet"  onPress={handleGreet} />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     gap: 10,
//   },
// });
