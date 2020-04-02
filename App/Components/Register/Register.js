import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  ScrollView,
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
import {Checkbox} from 'react-native-paper';
import validator from 'validator';
export default class Login extends Component {
  state = {
    name: '',
    user: '',
    mail: '',
    passwordAccount: '',
    passwordSecurity: '',
    ReferalCode: '',
    checked: false,
    checkField: false,
  };
  SignUp = () => {
    const {
      name,
      user,
      mail,
      passwordAccount,
      passwordSecurity,
      ReferalCode,
      checked,
    } = this.state;
    if (
      !validator.isEmpty(name) &&
      !validator.isEmpty(user) &&
      validator.isEmail(mail) &&
      !validator.isEmpty(passwordAccount) &&
      !validator.isEmpty(passwordSecurity) &&
      !validator.isEmpty(ReferalCode) &&
      checked
    ) {
      alert('Account Created Successful');
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    const {
      name,
      user,
      mail,
      passwordAccount,
      passwordSecurity,
      ReferalCode,
      checkField,
    } = this.state;
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.gradient}>
            <ScrollView style={{flex:1}}>
          <View style={Styles.InputView}>
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({checkField: false, name: text});
              }}
              value={this.state.name}
              placeholder={'name'}
            />
            {checkField ? (
              name ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Name must not be empty.
                </Text>
              )
            ) : null}
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({checkField: false, user: text});
              }}
              value={this.state.user}
              placeholder={'user'}
            />
            {checkField ? (
              user ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  User must not be empty.
                </Text>
              )
            ) : null}
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({checkField: false, mail: text});
              }}
              value={this.state.mail}
              placeholder={'mail'}
            />
            {checkField ? (
              mail ? (
                validator.isEmail(mail) ? null : (
                  <Text style={{alignSelf: 'center', color: 'white'}}>
                    Email Address must be Proper.
                  </Text>
                )
              ) : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  mail must not be empty.
                </Text>
              )
            ) : null}
            <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({checkField: false, passwordAccount: text});
              }}
              value={this.state.passwordAccount}
              secureTextEntry={true}
              placeholder={'Password Account'}
            />
            {checkField ? (
              passwordAccount ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Password Account must not be empty.
                </Text>
              )
            ) : null}
            <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({checkField: false, passwordSecurity: text});
              }}
              secureTextEntry={true}
              value={this.state.passwordSecurity}
              placeholder={'Password Security'}
            />
            {checkField ? (
              passwordSecurity ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Password Security must not be empty.
                </Text>
              )
            ) : null}
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({checkField: false, ReferalCode: text});
              }}
              value={this.state.ReferalCode}
              placeholder={'Referal code (user sponsor)'}
            />
            {checkField ? (
              ReferalCode ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Referal Code must not be empty.
                </Text>
              )
            ) : null}
            <View style={Styles.ForgotPassView}>
              <Checkbox
                status={this.state.checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({
                    checked: !this.state.checked,
                    checkField: false,
                  });
                }}
                color={White}
              />
              <Text style={Styles.ForgotPassText}>
                Accept the terms and conditions.
              </Text>
            </View>
            {checkField ? (
              this.state.checked ? null : (
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Accept our terms and conditions.
                </Text>
              )
            ) : null}
          </View>
          <View style={Styles.ButtonView}>
            <TouchableOpacity
              style={Styles.LoginButton}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={Styles.buttonTxt}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.RegisterButton}
              onPress={() => {
                this.setState({checkField: true});
                this.SignUp();
              }}>
              <Text style={Styles.buttonTxt2}>Register</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
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
  InputView: {
    marginTop: responsiveHeight(7),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUser: {
    marginTop: responsiveHeight(2),
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
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
  },
  ForgotPassText: {
    fontSize: responsiveFontSize(1.8),
    color: TextColor,
  },
  ButtonView: {
    width: '70%',
    height: responsiveHeight(15),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LoginButton: {
    width: '45%',
    height: responsiveHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 2,
    borderColor: LightBackground,
  },
  RegisterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(7),
    width: '45%',
    borderRadius: 100,
    backgroundColor: White,
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: White,
  },
  buttonTxt2: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: TextColor,
  },
});
