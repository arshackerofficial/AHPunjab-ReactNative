import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function Notification({
  onPress,
  titleStyle,
  title,
  details,
  detailsStyle,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.line} />
        <Text numberOfLines={1} style={[styles.title, titleStyle]}>
          {title}
        </Text>
        <Text style={[styles.details, detailsStyle]}>{details}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1.2,
    backgroundColor: "black",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  details: {
    marginTop: 5,
  },
});
