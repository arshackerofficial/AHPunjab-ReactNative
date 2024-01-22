import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

export default function AppTile({ onPress, source, text, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image style={styles.image} source={source} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: "#FFC501",
    borderRadius: 10,
    aspectRatio: 1,
    height: 100,
  },
  image: {
    alignSelf: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
