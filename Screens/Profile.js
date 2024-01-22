import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import MainAreaView from "../Components/MainAreaView";
import AppInputText from "../Components/AppInputText";

export default function Profile() {
  return (
    <MainAreaView style={{ justifyContent: "flex-start", marginTop: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/close.png")}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Edit Profile</Text>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/check.png")}
        />
      </View>
      <Image
        style={{ alignSelf: "center", marginTop: 20 }}
        source={require("../assets/profile.png")}
      />
      <Text style={styles.text}>Edit Profile Picture</Text>
      <Text style={{ marginTop: 50 }}>Incharge Name</Text>
      <AppInputText
        placeholder="Incharge Name"
        style={{ marginTop: 5 }}
        autoComplete="name"
        defaultValue="Arsh"
      />
      <Text style={{ marginTop: 20 }}>Email Address</Text>
      <AppInputText
        placeholder="Email Address"
        style={{ marginTop: 5 }}
        keyboardType="email-address"
        autoComplete="email"
      />
      <Text style={{ marginTop: 20 }}>Mobile</Text>
      <AppInputText
        placeholder="Mobile"
        style={{ marginTop: 5 }}
        keyboardType={Platform.isAndroid ? "numeric" : "number-pad"}
        maxLength={10}
        autoComplete="tel"
      />
      <View
        style={{
          backgroundColor: "black",
          height: 1.2,
          marginTop: 20,
        }}
      />
      <TouchableWithoutFeedback
        onPress={() => console.log("Change Password Pressed")}
      >
        <Text
          style={[
            styles.text,
            { marginTop: 10, alignSelf: "flex-start", marginStart: 5 },
          ]}
        >
          Change Password
        </Text>
      </TouchableWithoutFeedback>
      <View style={{ backgroundColor: "black", height: 1.2, marginTop: 10 }} />
    </MainAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "blue",
    marginTop: 10,
    alignSelf: "center",
  },
});
