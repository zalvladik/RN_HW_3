import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { useState } from "react";

function LoginScreen() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const onLogin = () => {
    if (getEmail.trim() === "" || getPassword.trim() === "") {
      Alert.alert("Вам потрібно заповнити всі поля");
    }
    console.log(getEmail, getPassword);
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/Photo_BG.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.formWrapper_log}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <TextInput style={styles.input} placeholder="Пароль" />
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn_sign} onPress={onLogin}>
                <Text style={styles.btn_sign_text}>Увійти</Text>
              </TouchableOpacity>

              <Text style={styles.sentence}>
                Немає акаунту? Зареєструватися
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    color: "#212121",
    lineHeight: 35.16,
    letterSpacing: 1,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    paddingLeft: 13,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    marginBottom: 15,
    color: "#BDBDBD",
    fontFamily: "Roboto-400",
    fontStyle: "normal",
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
  },
  formWrapper_log: {
    paddingTop: 36,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 110,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btn_sign: {
    fontSize: 16,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: "100%",
    height: 51,
    marginBottom: 15,
    fontFamily: "Roboto-400",
    fontStyle: "normal",
  },
  sentence: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-400",
    fontStyle: "normal",
  },
  image: {
    height: 812,
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  btn_sign_text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-400",
    fontStyle: "normal",
  },
});

export default LoginScreen;
