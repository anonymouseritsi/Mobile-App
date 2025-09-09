import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SERVER_URL = "https://alcantara-classmanagerserver.vercel.app/users";
export default function HomeScreen() {
  const [lastName, setLastName] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [section, setSection] = useState(``);
  const [status, setStatus] = useState(``);
  const [message, setMessage] = useState(``);

  const handlePresent = async () => {
    setMessage("Present");

    try {
      const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastName: lastName,
          firstName: firstName,
          section: section,
          status: "Present",
        }),
      });

      if (!response.ok) {
        throw new Error("Server Not Responding");
      }

      const result = await response.json();
      setMessage("Attendance Submitted");
      setLastName(""), setFirstName("");
      setSection("");
    } catch (error) {
      console.error(error);
      setMessage(`Server Error or Connection Failed`);
    }
  };

  const handleAbsent = async () => {
    setMessage("Absent");

    try {
      const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastName: lastName,
          firstName: firstName,
          section: section,
          status: "Absent",
        }),
      });

      if (!response.ok) {
        throw new Error("Server Not Responding");
      }

      const result = await response.json();
      setMessage("Attendance Submitted");
      setLastName(""), setFirstName("");
      setSection("");
    } catch (error) {
      console.error(error);
      setMessage(`Server Error or Connection Failed`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Last Name:
        <TextInput
          style={styles.input}
          placeholder=" Enter last name "
          value={lastName}
          onChangeText={setLastName}
        />
      </Text>

      <Text style={styles.label}>
        First Name:
        <TextInput
          style={styles.input}
          placeholder=" Enter first name "
          value={firstName}
          onChangeText={setFirstName}
        />
      </Text>

      <Text style={styles.label}>
        Section:
        <TextInput
          style={styles.input}
          placeholder=" Enter Section "
          value={section}
          onChangeText={setSection}
        />
      </Text>

      <Text>{message}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePresent}>
          <Text>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAbsent}>
          <Text>Absent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92dae5ff",
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 30,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    width: "40%",
    gap: 5,
  },
});
