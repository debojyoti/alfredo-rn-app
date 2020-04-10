import React, { Component } from "react";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import { hideCurrentOrderInfo } from '../redux/actions';

class SplashScreen extends Component {
  state = {};
  static navigationOptions = {
    header: null
  };
  componentDidMount = () => {
    this.props.hideCurrentOrderInfo();
    if (
      this.props.userData &&
      this.props.userData.auth &&
      this.props.userData.auth.token
    ) {
      if (this.props.userData.isQc === 0) {
        this.props.navigation.replace("Orders");
      } else if (this.props.userData.isQc === 1) {
        this.props.navigation.replace("QcOrders");
      }
    } else {
      this.props.navigation.replace("LoginScreen");
    }
  };
  render() {
    return (
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Image
      //     source={require("../assets/imgs/Analytics-logo-lockup-fullcolor.png")}
      //     style={{
      //       width: "40%",
      //       height: "30%"
      //     }}
      //   />
      // </View>
      <View></View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: token => dispatch(setToken(token)),
    hideCurrentOrderInfo: () => dispatch(hideCurrentOrderInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
