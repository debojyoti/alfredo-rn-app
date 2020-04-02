import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor} from '../../Globals/colors';
import Modal from 'react-native-modal';

export default class Wallet extends Component {
  state = {
    pressedButton: false,
  };
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeModal();
          }}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>
      {/* {this.props.Status === 'Success' ? (
          <Text>Success</Text>
        ) : (
          <Text>Failed</Text>
        )} */}

      <View style={Styles.TopTextView}>
        <Text style={Styles.HeaderText}>{this.props.HeaderText}</Text>
        <TouchableOpacity style={{marginTop: responsiveHeight(2)}}>
          <AntDesign
            name={
              this.props.Status === 'Success' ? 'checkcircle' : 'closecircle'
            }
            color={this.props.Status === 'Success' ? 'green' : 'red'}
            size={responsiveFontSize(10)}
          />
        </TouchableOpacity>
      </View>
      <View style ={{width:'80%',alignSelf:'center',marginVertical:responsiveHeight(3)}} >
      <Text style={Styles.smallText}>
            {this.props.text}
        </Text>
      </View>
    </View>
  );

  render() {
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
    width: responsiveWidth(90),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  TopView: {
    height: responsiveHeight(7),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  TopTextView: {
    width: '100%',
    alignItems: 'center',
  },
  HeaderText: {
    color: TextColor,
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: responsiveFontSize(2.2),
    color: TextColor,
  },
});
