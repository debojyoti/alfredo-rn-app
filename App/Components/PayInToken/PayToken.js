import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  Image,
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
import { White, LightBackground} from '../../Globals/colors';
import CheckBoxes from './CheckBoxes';
export default class Login extends Component {
  state = {
    Link: true,
    MyTeam: false,
    inputName: '',
    flag: false,
    flag1: false,
    isShowSearch: false,
    Business:true
  };
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.gradient}>
          {this.state.isShowSearch ? (
            <View style={Styles.Header}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({isShowSearch: false});
                }}>
                <Entypo name={'chevron-thin-left'} color={'white'} size={35} />
              </TouchableOpacity>

              <TextInput
                style={Styles.SearchTextInputView}
                placeholder={'Search'}
                placeholderTextColor={'#ffffff'}
              />
            </View>
          ) : (
            <View style={Styles.Header}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}>
                <Feather name={'menu'} color={'white'} size={35} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={Styles.HeaderText}>Withdraw In Token</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({isShowSearch: true});
                }}>
                <Image source={require('../../Assets/Images/search.png')} />
              </TouchableOpacity>
            </View>
          )}
          <View style={[Styles.Header,{height:40}]}>
           
            <TouchableOpacity
              onPress={() => this.setState({ Business: true, Advert: false, General: false })}
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomColor: this.state.Business ? 'white' : null,
                  borderBottomWidth: this.state.Business ? 3 : 0,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  No Enviado 
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ Advert: true, Business: false, General: false })}
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomColor: this.state.Advert ? 'white' : null,
                  borderBottomWidth: this.state.Advert ? 3 : 0,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  Enviado 
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.MainView}>
            <CheckBoxes showDelete={this.state.Business} {...this.props} />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
paddingTop:5,
  },
  MainView: {
    flex: 1,
    backgroundColor: White,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    
  },
  Header: {
    width: '100%',
    height: responsiveHeight(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
  },
  HeaderText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  SearchTextInputView: {
    width: '90%',
    height: responsiveHeight(6),
    borderRadius: 50,
    borderColor: White,
    borderWidth: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: responsiveHeight(1),
  },
});
