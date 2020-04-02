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
import Tabs from './Tabs';
import CheckBoxes from './CheckBoxes';
import CheckBoxes2 from './CheckboxesBusiness';
import CheckBoxes3 from './CheckboxesAdmin';
export default class Login extends Component {
  state = {
    Link: true,
    MyTeam: false,
    inputName: '',
    flag: false,
    flag1: false,
    User: true,
    UB: false,
    UA: false,
    showSearchBar: false,
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
          <View style={Styles.Header}>
            {this.state.showSearchBar ? (
              <View style={Styles.TopHeaderFlex}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({showSearchBar: false});
                  }}>
                  <Entypo
                    name={'chevron-thin-left'}
                    color={'white'}
                    size={35}
                  />
                </TouchableOpacity>

                <TextInput
                  style={Styles.SearchTextInputView}
                  placeholder={'Search'}
                  onChangeText={(searchterm)=>this.setState({searchterm})}
                  placeholderTextColor={'#ffffff'}
                />
              </View>
            ) : (
              <View style={Styles.TopHeaderFlex}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.openDrawer();
                  }}>
                  <Feather name={'menu'} color={'white'} size={35} />
                </TouchableOpacity> 
                <Text style={Styles.HeaderBottomText2}>Users</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({showSearchBar: true});
                  }}>
                  <Image source={require('../../Assets/Images/search.png')} />
                </TouchableOpacity>
              </View>
            )}

            <View style={Styles.BottomHeaderFlex}>
              <TouchableOpacity
                onPress={() => {
                  console.log("im true")
                  this.setState({User: true, UA: false, UB: false});
                }}>
                <Text
                  style={
                    this.state.User
                      ? Styles.pressedHeaderBottomText
                      : Styles.HeaderBottomText
                  }>
                  User
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({User: false, UA: false, UB: true});
                }}>
                <Text
                  style={
                    this.state.UB
                      ? Styles.pressedHeaderBottomText
                      : Styles.HeaderBottomText
                  }>
                  Business
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({User: false, UA: true, UB: false});
                }}>
                <Text
                  style={
                    this.state.UA
                      ? Styles.pressedHeaderBottomText
                      : Styles.HeaderBottomText
                  }>
                  Admin
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.MainView}>
            {this.state.User ? (
              <View>
                <Tabs {...this.props} />
                <CheckBoxes {...this.props} />
              </View>
            ) : this.state.UB ? (
              <View>
                <Tabs {...this.props} />
                <CheckBoxes2 {...this.props} />
              </View>
            ) : this.state.UA ? (
              <View>
                <Tabs {...this.props} />
                <CheckBoxes3 {...this.props} />
              </View>
            ) : null}
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
    paddingTop:10
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
    height: responsiveHeight(16),
    justifyContent: 'center',
  },
  TopHeaderFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
  },
  BottomHeaderFlex: {
    top: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(10),
  },
  HeaderText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  HeaderBottomText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  HeaderBottomText2: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.6),
    fontWeight: 'bold',
  },
  pressedHeaderBottomText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.2),
    textDecorationLine: 'underline',
    textDecorationColor: LightBackground,
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
  },
  inputName: {
    marginTop: responsiveHeight(1),
    width: '60%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },
  SearchTextInputView: {
    paddingTop: responsiveHeight(1),
    width: '90%',
    height: responsiveHeight(6),
    borderRadius: 50,
    borderColor: White,
    borderWidth: 2,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    justifyContent: 'center',
  },
});
