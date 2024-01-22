import { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

export default function AppInlineCheckbox({ style, text, onCheck }) {
  const [boxStyle, setBoxStyle] = useState(styles.labCheckBoxUnchecked);
  const handleCheck = () => {
    if (boxStyle == styles.labCheckBoxUnchecked) {
      setBoxStyle(styles.labCheckBoxChecked);
      onCheck(true);
    } else {
      setBoxStyle(styles.labCheckBoxUnchecked);
      onCheck(false);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text>{text}</Text>
      <TouchableWithoutFeedback onPress={handleCheck}>
        <View style={[styles.labCheckBox, boxStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  labCheckBox: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#000",
    height: 20,
    width: 20,
    marginStart: 5,
  },
  labCheckBoxUnchecked: {
    backgroundColor: "white",
  },
  labCheckBoxChecked: {
    backgroundColor: "black",
  },
});
