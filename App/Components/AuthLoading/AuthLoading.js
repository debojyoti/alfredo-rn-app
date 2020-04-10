import React, { Component } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Image } from "react-native";
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';

export default class AuthLoading extends Component {
  componentDidMount = () => {
      setTimeout(() => {
        this.props.navigation.navigate('Login')
    }, 1500);
  };
  render() {
    return (
      <LinearGradient
        colors={["#ECAA0D", "#E61EB6"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
         <Image
              style={{
                width: responsiveWidth(38),
                height: responsiveHeight(20),
              }}
              source={require('../../Assets/Images/Logo.png')}
            /> 
        </View>
      </LinearGradient>
    );
  }
}
