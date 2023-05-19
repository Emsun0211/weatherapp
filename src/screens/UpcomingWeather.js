import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from "react-native/";
import ListItem from "../components/ListItem";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    dt_txt: "2022-08-30 15:00:00",
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },

  {
    dt_txt: "2022-08-30 21:00:00",
    main: {
      temp_min: 290.31,
      temp_max: 292.46,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-09-04 12:00:00",
    main: {
      temp_min: 294.93,
      temp_max: 294.93,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      item={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <ImageBackground
      source={require("../../assets/upcoming-bg.jpg")}
      style={image}
    >
      <SafeAreaView style={container}>
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
