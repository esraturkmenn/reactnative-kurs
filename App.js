import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Giriş Yap</Text>
        <View style={styles.inputPlace}>
          <Text style={styles.inputTitle}>E-mail adresiniz</Text>
          <TextInput
            style={styles.input}
            placeholder="deneme@gmail.com"
            keyboardType={"email-address"}
          ></TextInput>
        </View>

        <View style={styles.inputPlace}>
          <Text style={styles.inputTitle}>Şifreniz</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            keyboardType={"visible-password"}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DEVAM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1e1e1e",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#3F3F3F",
    width: 320,
    height: 700,
    alignSelf: "center",
    borderRadius: 30,
    alignItems: "center",
  },
  titleText: {
    fontSize: 50,
    color: "#ffff",
    fontWeight: "700",
    marginVertical: 50,
  },
  inputPlace: {
    marginVertical: 20,
  },
  inputTitle: {
    fontSize: 25,
    color: "#ffff",
    width: 250,
    paddingStart: 5,
  },
  input: {
    fontSize: 22,
    backgroundColor: "#ffff",
    height: 40,
    borderRadius: 10,
    paddingStart: 10,
  },
  button: {
    backgroundColor: "#ffff",
    width: 120,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
});
