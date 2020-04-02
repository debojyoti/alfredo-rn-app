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
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';

export default class Wallet extends Component {
  state ={
  name:'',
  amount:'',
  message: '',
  check: false,
  }
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeReduceBalance();
          }}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>
      <View style={Styles.inputView}>
        <Text style={Styles.headingText}>Reduce balance</Text>
        <TextInput
          style={Styles.inputName}
          onChangeText={text => {
            this.setState({name: text});
          }}
          value={this.state.name}
          placeholder={'User : loco'}
        />
        <TextInput
          style={Styles.inputName}
          onChangeText={text => {
            this.setState({amount: text});
          }}
          value={this.state.amount}
          placeholder={'Amount :'}
        />
 <Text style={{alignSelf: 'center'}}>transection concept</Text>
        <View
          style={{
            height: responsiveHeight(10),
            width: responsiveWidth(50),
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderRadius: responsiveWidth(2),
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: responsiveHeight(7),
          }}>
          <TextInput
            placeholder="Amount"
            style={{justifyContent: 'center', alignItems: 'center'}}
            value={this.state.message}
            onChangeText={text => this.setState({message: text, check: true})}
            placeholderTextColor="black"
          />
        </View>
        {this.state.check ? (
          this.state.message ? null : (
            <Text style={{alignSelf: 'center',}}>
              Please enter Amount.
            </Text>
          )
        ) : null}
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.LinearGradientSellButton}>
          <Button
            style={Styles.GivetButton}
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={{
              color: LightBackground,
              fontWeight: 'bold',
              fontSize: responsiveFontSize(1.3),
            }} onPress={() => {
              this.setState({check: true});
            }}>
            Reduce Balance
          </Button>
        </LinearGradient>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.props.ReduceBalanceState === 'fancy'}
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
  },
  TopView: {
    height: responsiveHeight(13),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputView: {
    width: '90%',
    alignSelf: 'center',
  },
  headingText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputName: {
    marginTop: responsiveHeight(3),
    width: '100%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },
  GivetButton: {
    width: '100%',
    borderRadius: 8,
  },
  LinearGradientSellButton: {
    marginVertical: responsiveHeight(5),
    height: responsiveHeight(6),
    borderRadius: 8,
  },
});
