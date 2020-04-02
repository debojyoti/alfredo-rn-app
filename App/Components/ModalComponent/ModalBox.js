import React, { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { TextColor } from "../../Globals/colors";
import Modal from "react-native-modal";
import LinearGradient from "react-native-linear-gradient";
import { Checkbox } from "react-native-paper";

export default class Wallet extends Component {
  state = {
    pressedButton: false,
    checkbox1: false,
    checkbox2: false
  };
  renderModalContent = () => (
    <View style={[Styles.modalView,this.props.showCheckBox && {height:300}]}>
      <Text style={Styles.HeaderText}>{this.props.text}</Text>
      {this.props.showCheckBox && (
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              status={this.state.checkbox1 ? "checked" : "unchecked"}
              onPress={() => {
                this.setState({ checkbox1: !this.state.checkbox1 });
              }}
              color={"#2D0E49"}
            />
            <Text style={{ paddingLeft: 10, fontSize: 20 }}>Buy</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              status={this.state.checkbox2 ? "checked" : "unchecked"}
              onPress={() => {
                this.setState({ checkbox2: !this.state.checkbox1 });
              }}
              color={"#2D0E49"}
            />
            <Text style={{ paddingLeft: 10, fontSize: 20 }}>Sell</Text>
          </View>
        </View>
      )}

      <View style={Styles.bottomView}>
        <TouchableOpacity onPress={this.props.onCancel} style={Styles.btn}>
          <LinearGradient
            colors={["#E61EB6", "#ECAA0D"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Styles.SuperView}
          >
            <Text style={Styles.btnTxt}>No</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.onDone} style={Styles.btn}>
          <LinearGradient
            colors={["#E61EB6", "#ECAA0D"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Styles.SuperView}
          >
            <Text style={Styles.btnTxt}>Si</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.props.ModalState}
          backdropColor="rgba(0,0,0,0.1)"
          onBackdropPress={this.props.closeModal}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{ overflow: "scroll" }}
        >
          {this.renderModalContent()}
        </Modal>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  btnTxt: {
    color: "white",
    fontSize: 24
  },
  SuperView: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  btn: {
    width: 50,
    height: 50
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  modalView: {
    width: responsiveWidth(80),
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 200
  },
  TopView: {
    height: responsiveHeight(7),
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  TopTextView: {
    width: "100%",
    alignItems: "center"
  },
  HeaderText: {
    color: TextColor,
    fontSize: 18,
    fontWeight: "bold"
  },
  smallText: {
    fontSize: 14,
    color: TextColor
  }
});
