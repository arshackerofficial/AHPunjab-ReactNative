import { StyleSheet, View, TextInput } from "react-native";

export default function AppInputText({ style, ...props }) {
  return (
    <View style={[styles.textInput, style]}>
      <TextInput {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
    height: 40,
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
  },
});
