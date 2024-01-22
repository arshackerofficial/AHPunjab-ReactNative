import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import MainAreaView from "../Components/MainAreaView";
import AppInputText from "../Components/AppInputText";
import AppButton from "../Components/AppButton";

export default function ChangePassword() {
  return (
    <MainAreaView>
      <Text style={styles.title}>Change Password</Text>
      <Text style={styles.subtitle}>
        Enter your details to change your password
      </Text>
      <AppInputText
        placeholder="Current Password"
        secureTextEntry={true}
        autoComplete="current-password"
      />
      <AppInputText placeholder="New Password" autoComplete="new-password" />
      <AppInputText
        placeholder="Re-Type New Password"
        secureTextEntry={true}
        autoComplete="new-password"
      />
      <TouchableWithoutFeedback
        onPress={() => console.log("Forget Password Clicked")}
      >
        <Text style={styles.forgetPass}>Forget Password?</Text>
      </TouchableWithoutFeedback>
      <AppButton
        onPress={() => console.log("Change Password Clicked")}
        style={styles.changePasswordButton}
        textColor="white"
        textWeight="bold"
        text="CHANGE PASSWORD"
      />
    </MainAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
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
  changePasswordButton: {
    backgroundColor: "#FFC501",
  },
});
