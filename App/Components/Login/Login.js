import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import validator from 'validator';

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
import {TextColor, White, LightBackground} from '../../Globals/colors';
import {Button} from 'react-native-paper';
import ForgotPassword from './ForgotPassword';
export default class Login extends Component {
  state = {
    username: '',
    password: '',
    VisibleModal: false,
    fieldcheck: false,
  };
  onClose = () => {
    this.setState({VisibleModal: true});
  };
  Login = () => {
    const {username, password} = this.state;
    if (!validator.isEmpty(username) && !validator.isEmpty(password)) {
      alert('Login Successful');
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    const {username, password, fieldcheck} = this.state;
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.gradient}>
          <View style={Styles.LogoView}>
            <Image
              style={Styles.Logo}
              source={require('../../Assets/Images/Logo.png')}
            />
          </View>
          <View style={Styles.InputView}>
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({username: text,fieldcheck:false});
              }}
              value={this.state.username}
              placeholder={'Username'}
            />
            {fieldcheck ? (
              username ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Username must not be empty.
                </Text>
              )
            ) : null}
            <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({password: text,fieldcheck:false});
              }}
              value={this.state.password}
              placeholder={'Password'}
            />
            <View>
              {fieldcheck ? (
                password ? (
                  null
                ) : (
                  <Text style={{alignSelf: 'center', color: 'white'}}>
                    password must not be empty.{console.log('left')}
                  </Text>
                )
              ) : null}
            </View>
            <View style={Styles.ForgotPassView}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({VisibleModal: 'fancy'});
                }}>
                <Text style={Styles.ForgotPassText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.ButtonView}>
            <Button
              style={Styles.LoginButton}
              contentStyle={{height: responsiveHeight(7)}}
              labelStyle={{color: TextColor}}
              onPress={() => {
                this.setState({fieldcheck: true});
                this.Login();
              }}>
              Login
            </Button>
            <Button
              style={Styles.RegisterButton}
              contentStyle={{height: responsiveHeight(7)}}
              labelStyle={{color: LightBackground}}
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}>
              Register
            </Button>
          </View>
          <ForgotPassword
            onClose={this.onClose}
            visible={this.state.VisibleModal}
          />
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
  },
  LogoView: {
    width: '100%',
    height: responsiveHeight(25),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Logo: {
    width: responsiveWidth(29),
    height: responsiveHeight(16.8),
    resizeMode: 'contain',
  },
  InputView: {
    width: '90%',
    height: responsiveHeight(35),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUser: {
    width: '80%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: '2%',
  },
  inputPassword: {
    marginTop: responsiveHeight(2),
    width: '80%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: '2%',
  },
  ForgotPassView: {
    width: '80%',
    alignSelf: 'center',
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: responsiveWidth(2),
  },
  ForgotPassText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: White,
  },
  ButtonView: {
    width: '90%',
    alignSelf: 'center',
  },
  LoginButton: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: White,
  },
  RegisterButton: {
    marginTop: responsiveHeight(2),
    width: '80%',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 2,
    borderColor: LightBackground,
  },
});
