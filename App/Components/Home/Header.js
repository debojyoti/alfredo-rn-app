import React, { Component } from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { White } from "../../Globals/colors";
import { Switch } from "react-native-paper";
import ModalBox from "../ModalComponent/ModalBox";

export default class Header extends Component {
  state = {
    ModalState: false,
    ModalState1: false,
    Status: "Success",
  };

  switch1 = () => {
    this.setState({ ModalState: true });
  };
  closeModal = () => {
    this.setState({ ModalState: false, ModalState1: false });
  };
  switch2 = () => {
    this.setState({ ModalState1: true });
  };
  onCancel = () => {
    this.setState(
      { ModalState: false },
      () => {
        this._notifyParent(false);
      }
    );
  };

  onDone = () => {
    this.setState(
      { ModalState: false },
      () => {
        this._notifyParent(true);
      }
    );
  };

  onCancel1 = () => {
    this.setState(
      {  ModalState1: false },
      () => {
        this._notifyParent(false);
      }
    );
  };

  onDone1 = () => {
    this.setState(
      { ModalState1: false },
      () => {
        this._notifyParent(true);
      }
    );
  };

  _notifyParent = (status) => {
    this.props.onStatusChange(status);
  };

  render() {
    const { isActive } = this.props;
    return (
      <>
        <View>
          <View style={Styles.HeaderView}>
            <View style={Styles.Switch1View}>
              <Switch
                value={isActive}
                onValueChange={this.switch1}
                thumbColor={"#ECAA0D"}
                trackColor={{ false: White, true: White }}
                style={{
                  transform:
                    Platform.OS === "android"
                      ? [{ scaleX: 1.8 }, { scaleY: 1.7 }]
                      : [{ scaleX: 1 }, { scaleY: 1 }],
                }}
              />
              <Text style={Styles.HeaderBoldText}>
                {isActive ? "Active Buy" : "No Active Buy"}
              </Text>
            </View>
            <View style={Styles.Switch2View}>
              <Switch
                value={isActive}
                onValueChange={this.switch2}
                thumbColor={"#ECAA0D"}
                trackColor={{ false: White, true: White }}
                style={{
                  transform:
                    Platform.OS === "android"
                      ? [{ scaleX: 1.8 }, { scaleY: 1.7 }]
                      : [{ scaleX: 1 }, { scaleY: 1 }],
                }}
              />
              <Text style={Styles.HeaderBoldText}>
                {isActive ? "Active Sell" : "No Active Sell"}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.openDrawer()}
          >
            <Feather name={"menu"} color={"white"} size={35} />
          </TouchableOpacity>
        </View>
        <ModalBox
          text={"Estas seguro que quieres hacer cambios"}
          onCancel={this.onCancel1}
          onDone={this.onDone1}
          closeModal={this.closeModal}
          ModalState={this.state.ModalState1}
        />
        <ModalBox
          text={"Estas seguro que quieres hacer cambios"}
          onCancel={this.onCancel}
          onDone={this.onDone}
          closeModal={this.closeModal}
          ModalState={this.state.ModalState}
        />
      </>
    );
  }
}
const Styles = StyleSheet.create({
  HeaderView: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: responsiveHeight(14),
    marginLeft: responsiveWidth(10),
  },
  menu: {
    marginLeft: "4%",
    position: "absolute",
    top: responsiveHeight(4.75),
  },
  HeaderBoldText: {
    fontSize: responsiveFontSize(2.2),
    color: White,
    fontWeight: "bold",
  },
  Switch1View: {
    justifyContent: "center",
    alignItems: "center",
    bottom: responsiveHeight(1),
  },
  Switch2View: {
    marginLeft: responsiveWidth(10),
    justifyContent: "center",
    alignItems: "center",
    bottom: responsiveHeight(1),
  },
});
