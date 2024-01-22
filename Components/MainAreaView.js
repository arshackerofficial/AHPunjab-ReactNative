import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

export default function MainAreaView({ style, children }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 40,
    paddingBottom: 0,
  },
});
