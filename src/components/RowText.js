import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {
  const {
    messageTwo,
    messageOne,
    containerStyle,
    messageOneStyle,
    messageTwoStyle,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne} </Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default RowText;
