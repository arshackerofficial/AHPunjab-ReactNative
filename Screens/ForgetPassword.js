import { StyleSheet, Text } from "react-native";
import MainAreaView from "../Components/MainAreaView";
import AppInputText from "../Components/AppInputText";
import AppButton from "../Components/AppButton";

export default function ForgetPassword() {
  return (
    <MainAreaView>
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>Enter your email to reset password</Text>
      <AppInputText placeholder="Email" keyboardType="email-address" />
      <AppButton
        onPress={() => console.log("Forget Password Clicked")}
        style={styles.forgetButton}
        textColor="white"
        textWeight="bold"
        text="FORGET PASSWORD"
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
  forgetButton: {
    backgroundColor: "#FFC501",
  },
});
