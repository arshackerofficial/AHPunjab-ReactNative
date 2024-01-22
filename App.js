import { StyleSheet } from "react-native";
import Register from "./Screens/Register";

export default function App() {
  return <Register />;
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
