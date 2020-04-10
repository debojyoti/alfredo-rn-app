import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { LightBackground, White } from "../Globals/colors";

export default class Drawer extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={["#ECAA0D", "#E61EB6"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}
        >
          <View style={Styles.LogoView}>
            <Image
              style={Styles.Logo}
              source={require("../Assets/Images/Logo.png")}
            />
          </View>

          <View style={Styles.LogoTextView}>
            <Text style={Styles.LogoText}>Givet network user</Text>
          </View>

          <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity
              style={Styles.HomeView}
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.image}
                  source={require("../Assets/icons/home.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("User");
              }}
              style={Styles.HomeView}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/user.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>User</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.HomeView}
              onPress={() => {
                this.props.navigation.navigate("Team");
              }}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/team.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Team</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Configuration");
              }}
              style={Styles.HomeView}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/configuration.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Configuration</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("PayInToken");
              }}
              style={Styles.HomeView}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/payments1.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Withdrawal In Token</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Business");
              }}
              style={Styles.HomeView}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.image}
                  source={require("../Assets/icons/business.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Validation Business</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.HomeView}
              onPress={() => {
                this.props.navigation.navigate("ValidationAnnounce");
              }}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/annouce1.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Validation Announce</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.HomeView}
              onPress={() => {
                this.props.navigation.navigate("ChatList");
              }}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/chat.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Chat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
              style={Styles.HomeView}
            >
              <View style={Styles.ImageView}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require("../Assets/icons/goout.svg")}
                />
              </View>
              <View style={Styles.TextView}>
                <Text style={Styles.HomeText}>Go out</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 15
  },
  gradient: {
    flex: 1,
    paddingVertical: 40,
    borderTopRightRadius: 15
  },
  LogoView: {
    width: "100%",
    height: responsiveHeight(12),
    justifyContent: "center",
    alignItems: "center"
  },
  Logo: {
    width: responsiveWidth(17.2),
    height: responsiveHeight(10)
  },
  LogoTextView: {
    width: "100%",
    height: responsiveHeight(6),
    justifyContent: "center",
    alignItems: "center"
  },
  LogoText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.2)
  },
  HomeView: {
    flexDirection: "row",
    width: "100%",
    height: responsiveHeight(8),
    justifyContent: "center",
    alignItems: "center"
  },
  ImageView: {
    width: "40%",
    alignItems: "center"
  },

  TextView: {
    width: "60%"
  },
  image: {
    width: responsiveWidth(7.8),
    height: responsiveHeight(4.5),
    resizeMode: "contain"
  },
  HomeText: {
    color: White,
    fontSize: responsiveFontSize(2.5)
  },
  imageSpeaker: {
    width: responsiveWidth(7.8),
    height: responsiveHeight(4.5),
    resizeMode: "contain"
  }
});
