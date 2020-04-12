import React, { Component } from "react";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from "react-native-indicators";
import { View } from "native-base";
import { Text } from "react-native";

const FullPageLoader = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: 40 }}>
        <DotIndicator color="#fc9803" animationDuration={500} count={5} />
      </View>
      <Text style={{ fontSize: 20, marginTop: 13 }}>
        {props.text ? props.text : "Loading"}
      </Text>
    </View>
  );
};

export default FullPageLoader;
