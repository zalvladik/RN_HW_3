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

import AvatarImage from "./Avatar_Image";
import { useState } from "react";

function RegistrationScreen() {
  const [shouldShow, setShouldShow] = useState(false);
  const [getPassword, setPassword] = useState("");
  const [getLogin, setLogin] = useState("");
  const [getEmail, setEmail] = useState("");

  const onRegister = () => {
    if (
      getEmail.trim() === "" ||
      getPassword.trim() === "" ||
      getLogin.trim() === ""
    ) {
      Alert.alert("Вам потрібно заповнити всі поля");
    }
    console.log(getLogin, getEmail, getPassword);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/Photo_BG.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.formWrapper_reg}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <AvatarImage />

            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              onChangeText={setLogin}
            />

            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
            />

            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => {
                  setShouldShow(!shouldShow);
                }}
              >
                <Text style={styles.showPassword_text}>
                  {shouldShow ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn_sign} onPress={onRegister}>
              <Text style={styles.btn_sign_text}>Зареєстуватися</Text>
            </TouchableOpacity>

            <Text style={styles.sentence}>Вже є акаунт? Увійти</Text>
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
    alignItems: "center",
    justifyContent: "center",
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
    lineHeight: 18.75,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    marginBottom: 15,
    color: "#BDBDBD",
    fontFamily: "Roboto-400",
    fontStyle: "normal",
  },
  formWrapper_reg: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-400",
    fontStyle: "normal",
    marginBottom: 45,
  },
  showPassword_text: {
    lineHeight: 18.75,
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-400",
    fontStyle: "normal",
  },
  showPassword: {
    position: "absolute",
    top: 16,
    right: 13,
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
  icon: {
    width: 25,
    height: 25,
  },
  iconBtn: {
    position: "absolute",
    left: "90%",
    top: "65%",
  },
});

export default RegistrationScreen;
