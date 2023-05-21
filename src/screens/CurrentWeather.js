import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>

      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight || 0,
  },
  tempStyle: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 48,
  },

  description: {
    fontSize: 40,
  },
  message: {
    fontSize: 25,
  },
});
