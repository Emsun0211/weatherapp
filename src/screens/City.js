import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";
import moment from "moment";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";
import { weatherType } from "../utilities/weatherType";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWraper,
    populationText,
    riseSetText,
    riseSetWrapper,
    imageLayout,
    rowLayout,
  } = styles;
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-bg.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={[populationWraper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[rowLayout, riseSetWrapper]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyle={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  cityName: {
    fontSize: 40,
    color: "white",
  },
  countryName: {
    fontSize: 30,
    color: "#4D4D4D",
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  populationWraper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default City;
