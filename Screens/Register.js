import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import MainAreaView from "../Components/MainAreaView";
import AppInputText from "../Components/AppInputText";
import AppButton from "../Components/AppButton";
import AppInlineCheckbox from "../Components/AppInlineCheckbox";

export default function Register() {
  const handleCheck = (isChecked) => {
    if (isChecked) {
      console.log("Checked!");
    } else {
      console.log("Unchecked!");
    }
  };

  return (
    <MainAreaView>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Create your institute’s account</Text>
      <AppInputText placeholder="District" />
      <AppInputText placeholder="Tehsil" />
      <AppInputText placeholder="Incharge Name" autoComplete="name" />
      <AppInlineCheckbox
        text="Is lab available in institute?"
        onCheck={handleCheck}
      />
      <AppInputText placeholder="Institute Designation" />
      <AppInputText placeholder="Institute Name" />
      <AppInputText
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
      />
      <AppInputText
        placeholder="Mobile"
        keyboardType={Platform.isAndroid ? "numeric" : "number-pad"}
        maxLength={10}
        autoComplete="tel"
      />
      <AppButton
        onPress={() => console.log("Register Clicked")}
        style={styles.registerButton}
        textColor="white"
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
  registerButton: {
    backgroundColor: "#FFC501",
  },
});
