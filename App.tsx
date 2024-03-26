import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "./src/components/Calendar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Calendar onDaySelect={(date) => console.log(date)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "600",
  },
});
