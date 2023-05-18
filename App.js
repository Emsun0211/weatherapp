import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/cardWeather";
import City from "./src/screens/City";
import UpcomingWeather from "./src/screens/UpcomingWeather";
const App = () => {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      {/* <CurrentWeather /> */}
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
