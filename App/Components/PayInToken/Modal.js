import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../Globals/colors';
import { Switch} from 'react-native-paper';
import Modal from 'react-native-modal';

export default class Wallet extends Component {
  state = {
    pressedButton: false,
    modalVisible: false,
    message: '',
    check: false,
  };
  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  renderModalContent = () => (
    <View style={Styles.modalView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        style={{
          zIndex: 1,
          marginVertical: responsiveHeight(25),
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderTopWidth: 1,
          borderRadius: responsiveWidth(2),
        }}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{flex: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{fontSize: responsiveFontSize(2.3), alignSelf: 'center'}}>
              Are you sure you want to
            </Text>
            <Text
              style={{fontSize: responsiveFontSize(2.3), alignSelf: 'center'}}>
              disapprove this withdrawal
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              top: responsiveHeight(6),
            }}>
            <Text
              style={{fontSize: responsiveFontSize(2.3), alignSelf: 'center'}}>
              notification message
            </Text>
            <View
              style={{
                zIndex: 1,
                height: responsiveHeight(10),
                width: responsiveWidth(50),
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderRadius: responsiveWidth(2),
              }}>
              <TextInput
                value={this.state.message}
                onChangeText={text => this.setState({message: text})}
              />
              {this.state.check ? (
                this.state.message ? null : (
                  <Text style={{alignSelf: 'center', color: 'white'}}>
                    Please enter message.
                  </Text>
                )
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: responsiveHeight(1),
              }}>
              <TouchableOpacity
                style={[
                  Styles.modal2,
                  {
                    marginRight: responsiveWidth(4),
                    marginLeft: responsiveWidth(13),
                  },
                ]}
                onPress={() => {
                  this.setState({check: true});
                  this.setModalVisible();
                }}>
                <LinearGradient
                  colors={['#E61EB6', '#ECAA0D']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  style={Styles.modal2}>
                  <Text style={{alignSelf: 'center'}}>Not</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Styles.modal2, {marginRight: responsiveWidth(4)}]}
                onPress={() => {
                  this.setState({check: true});
                  this.setModalVisible();
                }}>
                <LinearGradient
                  colors={['#E61EB6', '#ECAA0D']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  style={Styles.modal2}>
                  <Text style={{alignSelf: 'center'}}>Yes</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeModal();
          }}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>
      <View style={Styles.parentView}>
        <View style={Styles.input1View}>
          <Text>
            <Text style={Styles.parentText}>Name :</Text>
            <Text style={Styles.childText}> abdullac</Text>
          </Text>
        </View>
        <View style={[Styles.input1View, {marginTop: responsiveHeight(3)}]}>
          <Text>
            <Text style={Styles.parentText}>User :</Text>
            <Text style={Styles.childText}> loco1</Text>
          </Text>
        </View>
        <View style={[Styles.input1View, {marginTop: responsiveHeight(3)}]}>
          <Text>
            <Text style={Styles.parentText}>Amount :</Text>
            <Text style={Styles.childText}> 230 GVT</Text>
          </Text>
        </View>
        <View style={[Styles.input1View, {marginTop: responsiveHeight(3)}]}>
          <Text>
            <Text style={Styles.parentText}>Date :</Text>
            <Text style={Styles.childText}> 12/02/2020</Text>
          </Text>
        </View>
        <View style={[Styles.input1View, {marginTop: responsiveHeight(3)}]}>
          <Text>
            <Text style={Styles.parentText}>Address token Gvt :</Text>
            <Text style={Styles.childText}> xhgts48sngsg21sa2xhgst</Text>
          </Text>
        </View>

        <View style={Styles.GradientParentView}>
          <LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={Styles.SwitchGradientView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {this.state.pressedButton ? (
                <Text style={Styles.SwitchText}>Pay</Text>
              ) : null}
              <Switch
                value={this.state.pressedButton}
                onValueChange={() => {
                  this.setState({pressedButton: !this.state.pressedButton});
                }}
                thumbColor={'white'}
                trackColor={{false: 'rgba(0,0,0,0)', true: 'rgba(0,0,0,0)'}}
                style={{transform: [{scaleX: 1.8}, {scaleY: 1.7}]}}
              />
              {this.state.pressedButton ? null : (
                <Text style={Styles.SwitchText}>No Pay</Text>
              )}
            </View>
          </LinearGradient>
          <TouchableOpacity
            style={Styles.refuseButton}
            onPress={() => this.setModalVisible()}>
            <Text>To Refuse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  render() {
    console.log('text', this.state.modalVisible);
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />

        <Modal
          isVisible={this.props.ModalState === 'fancy'}
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{overflow: 'scroll'}}>
          {this.renderModalContent()}
        </Modal>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  modalView: {
    width: responsiveWidth(80),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    zIndex: 1,
  },
  modal2: {
    height: responsiveHeight(5),
    width: responsiveWidth(22),
    marginRight: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:responsiveHeight(1)
  },
  TopView: {
    height: responsiveHeight(7),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  parentText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.5),
  },
  childText: {
    color: 'grey',
    fontSize: responsiveFontSize(2),
  },
  parentView: {
    width: '90%',
    alignSelf: 'center',
  },
  input1View: {
    flexDirection: 'row',
  },
  SwitchGradientView: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    height: responsiveHeight(7),
    borderRadius: 50,
    justifyContent: 'center',
  },
  SwitchText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2),
  },
  GradientParentView: {
    height: responsiveHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  refuseButton: {
    top: responsiveHeight(3),
    height: responsiveHeight(6),
    width: responsiveWidth(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(5),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
  },
});
