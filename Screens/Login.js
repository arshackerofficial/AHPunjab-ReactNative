import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import MainAreaView from "../Components/MainAreaView";
import AppInputText from "../Components/AppInputText";
import AppButton from "../Components/AppButton";

export default function Login() {
  return (
    <MainAreaView>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      <AppInputText placeholder="Username" autoComplete="username" />
      <AppInputText
        placeholder="Password"
        secureTextEntry={true}
        autoComplete="current-password"
      />
      <TouchableWithoutFeedback
        onPress={() => console.log("Forget Password Clicked")}
      >
        <Text style={styles.forgetPass}>Forget Password?</Text>
      </TouchableWithoutFeedback>
      <AppButton
        onPress={() => console.log("Login Clicked")}
        style={styles.loginButton}
        textColor="white"
        textWeight="bold"
        text="LOGIN"
      />
      <View
        style={{ flexDirection: "row", marginTop: 50, alignItems: "center" }}
      >
        <View style={{ backgroundColor: "#000", height: 1.2, flex: 1 }} />
        <Text style={{ paddingStart: 10, paddingEnd: 10, fontWeight: "bold" }}>
          OR
        </Text>
        <View style={{ backgroundColor: "#000", height: 1.2, flex: 1 }} />
      </View>
      <AppButton
        onPress={() => console.log("Register Clicked")}
        style={styles.registerButton}
        textColor="#FFC501"
        textWeight="bold"
        text="REGISTER"
      />
    </MainAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
  },
  forgetPass: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#FFC501",
  },
  registerButton: {
    marginTop: 50,
    borderColor: "#FFC501",
    borderWidth: 2,
  },
});
