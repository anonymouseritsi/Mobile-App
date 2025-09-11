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
      setMessage("Attendance Submitted!");
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
      <Text style={styles.title}>Class Attendance</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Section"
        value={section}
        onChangeText={setSection}
      />

      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.presentButton]}
          onPress={() => handleSubmit("Present")}
        >
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.absentButton]}
          onPress={() => handleSubmit("Absent")}
        >
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7fa",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#2c3e50",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
    color: "#2c3e50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  presentButton: {
    backgroundColor: "#27ae60",
  },
  absentButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
