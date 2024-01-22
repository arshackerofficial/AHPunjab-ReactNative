import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function AppButton({
  onPress,
  style,
  textColor,
  textWeight,
  text,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={{ color: textColor, fontWeight: textWeight }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 40,
    flexDirection: "column",
    borderRadius: 5,
  },
});
