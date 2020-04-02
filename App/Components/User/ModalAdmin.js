import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
  ScrollView,
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
import {TextColor} from '../../Globals/colors';
import {Button, Checkbox} from 'react-native-paper';
import Modal from 'react-native-modal';

export default class Wallet extends Component {
  state = {
    name: '',
    user: '',
    mail: '',
    passwordAccount: '',
    passwordSecurity: '',
    AddressBTC: '',
    eye: true,
    eye2: true,
    checkFiled: false,
    checkboxes: [
      {
        id: 1,
        name: 'team',
        checked: false,
      },
      {
        id: 2,
        name: 'home',
        checked: false,
      },
      {
        id: 3,
        name: 'chat',
        checked: false,
      },
    ],
  };
  pressed = index => {
    let newArr = [...this.state.checkboxes];
    for (let i = 0; i < newArr.length; i++) {
      if (i === index) {
        newArr[index].checked = !newArr[index].checked;
      } else {
        newArr[i].checked = false;
      }
    }
    this.setState({checkboxes: newArr});
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
      <ScrollView>
        <View style={Styles.inputView}>
          {/* <Text style={Styles.headingText}>Add balance</Text> */}
          <View style={Styles.inputName}>
            {/* <Text style={Styles.inputText}>Name:</Text> */}
            <TextInput
              style={Styles.inputText1}
              onChangeText={text => {
                this.setState({name: text});
              }}
              value={this.state.name}
              placeholder={'Name:'}
            />
            {this.state.checkField ? (
              this.state.name ? null : (
                <Text style={Styles.textCheck}>name must not be empty.</Text>
              )
            ) : null}
          </View>
          <View style={Styles.inputName}>
            {/* <Text style={Styles.inputText}>User:</Text> */}
            <TextInput
              style={Styles.inputText1}
              onChangeText={text => {
                this.setState({user: text});
              }}
              value={this.state.user}
              placeholder={'User:'}
            />
            {this.state.checkField ? (
              this.state.user ? null : (
                <Text style={Styles.textCheck}>user must not be empty.</Text>
              )
            ) : null}
          </View>
          <View style={Styles.inputName}>
            {/* <Text style={Styles.inputText}>Mail:</Text> */}
            <TextInput
              style={Styles.inputText1}
              onChangeText={text => {
                this.setState({mail: text});
              }}
              value={this.state.mail}
              placeholder={'Mail:'}
            />
            {this.state.checkField ? (
              this.state.mail ? null : (
                <Text style={Styles.textCheck}>mail must not be empty.</Text>
              )
            ) : null}
          </View>

          <View style={Styles.flex}>
            <View style={Styles.inputName}>
              {/* <Text style={Styles.inputText}>Password 1:</Text> */}
              <TextInput
                style={Styles.inputText1}
                onChangeText={text => {
                  this.setState({passwordAccount: text});
                }}
                value={this.state.passwordAccount}
                secureTextEntry={this.state.eye}
                placeholder={'Password 1:'}
              />
              {this.state.checkField ? (
                this.state.passwordAccount ? null : (
                  <Text style={Styles.textCheck}>
                    Password Account must not be empty.
                  </Text>
                )
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  this.setState({eye: !this.state.eye});
                }}>
                <Image source={require('../../Assets/icons/eye.svg')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.flex}>
            <View style={Styles.inputPassword}>
              {/* <Text style={Styles.inputText}>Password 2:</Text> */}
              <TextInput
                style={Styles.inputText1}
                onChangeText={text => {
                  this.setState({passwordAccount: text});
                }}
                value={this.state.passwordAccount}
                secureTextEntry={this.state.eye2}
                placeholder={'Password 2:'}
              />
              {this.state.checkField ? (
                this.state.passwordAccount ? null : (
                  <Text style={Styles.textCheck}>
                    Password Account must not be empty.
                  </Text>
                )
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  this.setState({eye2: !this.state.eye2});
                }}>
                <Image source={require('../../Assets/icons/eye.svg')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.inputName}>
            {/* <Text style={Styles.inputText}>Address btc:</Text> */}
            <TextInput
              style={Styles.inputText1}
              onChangeText={text => {
                this.setState({AddressBTC: text});
              }}
              value={this.state.AddressBTC}
              placeholder={'Address btc:'}
            />
            {this.state.checkField ? (
              this.state.AddressBTC ? null : (
                <Text style={Styles.textCheck}>
                  Address BTC must not be empty.
                </Text>
              )
            ) : null}
          </View>
        </View>
        <View style={Styles.GradientSuperView}>
          <View style={Styles.ParentFlexView1}>
            <View style={Styles.nested1}>
              <Text style={Styles.GradientText}>Current package</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>0.48</Text>
              </LinearGradient>
            </View>
            <View style={Styles.nested2}>
              <Text style={Styles.GradientText}>Buy</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>2</Text>
              </LinearGradient>
            </View>
            <View style={Styles.nested3}>
              <Text style={Styles.GradientText}>Sell</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>3</Text>
              </LinearGradient>
            </View>
          </View>
          <View style={Styles.ParentFlexView2}>
            <View style={Styles.View2nested1}>
              <Text style={Styles.GradientText}>B. Available</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>2</Text>
              </LinearGradient>
            </View>
            <View style={Styles.View2nested2}>
              <Text style={Styles.GradientText}>B. No freed</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>3</Text>
              </LinearGradient>
            </View>
            <View style={Styles.View2nested3}>
              <Text style={Styles.GradientText}>B. Freed</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>3</Text>
              </LinearGradient>
            </View>
          </View>


          <View style={Styles.ParentFlexView3}>
            <View style={Styles.View2nested33}>
              <Text style={Styles.GradientText}>B. Comision not available</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>1</Text>
              </LinearGradient>
            </View>
            {/* <View style={Styles.View2nested2}>
              <Text style={Styles.GradientText}>B. No freed</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>2</Text>
              </LinearGradient>
            </View> */}
            <View style={Styles.View2nested3}>
              <Text style={Styles.GradientText}>Current percentage</Text>
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.gradientView}>
                <Text style={Styles.GradientTextWhite}>50%</Text>
              </LinearGradient>
            </View>
          </View>



        </View>

        <View style={Styles.checkboxView}>
          {this.state.checkboxes.map((item, index) => (
            <View>
              <Text style={Styles.checkboxText}>{item.name}</Text>
              <Checkbox
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.pressed(index);
                }}
                color={TextColor}
              />
            </View>
          ))}
        </View>
        <View style={Styles.ButtonSuperView}>
          <View style={Styles.ButtonFlexView1}>
            <Button
              style={Styles.GivetButton}
              contentStyle={{height: responsiveHeight(4)}}
              labelStyle={{
                color: TextColor,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.3),
              }}>
              Delete User
            </Button>
            <Button
              style={Styles.GivetButton}
              contentStyle={{height: responsiveHeight(4)}}
              labelStyle={{
                color: TextColor,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.3),
              }}>
              Block Buy/Sell
            </Button>
          </View>
          <View style={Styles.ButtonFlexView2}>
            <Button
              style={Styles.GivetButton}
              contentStyle={{height: responsiveHeight(4)}}
              labelStyle={{
                color: TextColor,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.3),
              }}>
              Resend Email
            </Button>
            <Button
              style={Styles.GivetButton}
              contentStyle={{height: responsiveHeight(4)}}
              labelStyle={{
                color: TextColor,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.3),
              }}>
              Save
            </Button>
          </View>
        </View>
      </ScrollView>
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
    height: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  TopView: {
    height: responsiveHeight(7),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headingText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputName: {
    marginTop: responsiveHeight(3),
    width: '90%',
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: responsiveWidth(2),
    borderColor: 'gray',
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: responsiveFontSize(2),
  },
  inputText1: {
    width: '75%',
    marginTop: responsiveHeight(0.7),
    marginLeft: responsiveWidth(1),
    color: TextColor,
    fontWeight: '600',
  },
  inputText2: {
    marginBottom: responsiveHeight(1),
    marginLeft: responsiveWidth(1),
    width: '90%',
  },
  inputPassword: {
    marginTop: responsiveHeight(3),
    width: '90%',
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: responsiveWidth(2),
    borderColor: 'gray',
    flexDirection: 'row',
  },
  GradientSuperView: {
    marginTop: responsiveHeight(3),
    width: '90%',
    alignSelf: 'center',
  },
  ParentFlexView1: {
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ParentFlexView2: {
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ParentFlexView3: {
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  GradientText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
  },
  GradientTextWhite: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
  },
  gradientView: {
    width: responsiveWidth(20),
    height: responsiveHeight(4),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nested1: {
    alignItems: 'center',
    width: responsiveWidth(25),
  },
  nested2: {
    alignItems: 'center',
    width: responsiveWidth(25),
  },
  nested3: {
    alignItems: 'center',
    width: responsiveWidth(25),
  },
  View2nested1: {
    alignItems: 'center',
    width: responsiveWidth(25),
  },
  View2nested2: {
    alignItems: 'center',
    width: responsiveWidth(25),
  },
  View2nested3: {
    alignItems: 'center',
    width: responsiveWidth(25),
  },
  View2nested33: {
    alignItems: 'center',
    width: responsiveWidth(55),
  },
  ButtonSuperView: {
    marginTop: responsiveHeight(2),
    width: '90%',
    alignSelf: 'center',
  },
  ButtonFlexView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(6),
  },
  ButtonFlexView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(6),
  },
  GivetButton: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a9a9a9',
  },
  checkboxView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  checkboxText: {
    color: TextColor,
    fontSize: responsiveFontSize(1.8),
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
