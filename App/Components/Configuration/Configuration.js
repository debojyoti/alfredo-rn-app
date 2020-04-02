import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {
  Platform,
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  FlatList,
  StatusBar,
  TextInput,
  Linking,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../Globals/colors';
import { Button, Checkbox } from 'react-native-paper';
import Chart from './Chart';
import validator from 'validator';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  TabHeading,
  ScrollableTab,
  Badge,
} from 'native-base';
export default class Login extends Component {
  state = {
    Link: true,
    MyTeam: false,
    inputName: '',
    flag: false,
    flag1: false,
    checked: false,
    item: [
      {
        name: 'Meals',
        checked: false,
      },
      {
        name: 'Pharmacies',
        checked: false,
      },
      {
        name: 'Winery',
        checked: false,
      },
      {
        name: 'HairDressing',
        checked: false,
      },
      {
        name: 'Car wash',
        checked: false,
      },
    ],
    fieldcheck: false,
    linkfacebook:'',
    linktutorial:'',
    weeklycode:'',
    hashtag:'',
    General: true,
    Business: false,
    Advert: false,
  };
  pressed = index => {
    let newArr = [...this.state.item];
    newArr[index].checked = !newArr[index].checked;
    this.setState({ Data: newArr });
  };
  onSubmit = () => {
    const { linkfacebook,
    linktutorial,
    weeklycode,
    hashtag} = this.state;
    if (!validator.isEmpty(linkfacebook) && !validator.isEmpty(linktutorial) && !validator.isEmpty(weeklycode) && !validator.isEmpty(hashtag)) {
      alert('Saved');
    }
  };
  delete(itm) {
    let { item } = this.state;
    item.splice(item.indexOf(itm), 1);
    this.setState({
      item,
    });
  }
  render() {
    const {linkfacebook, linktutorial, weeklycode, hashtag, fieldcheck} = this.state;
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}>
          <View style={Styles.Header}>
            <TouchableOpacity>
              <Text style={Styles.HeaderText}>Configuration</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
            style={[Styles.menu,{}]}>
            <Feather name={'menu'} color={'white'} size={35} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity
              onPress={() => this.setState({ Business: false, General: true, Advert: false })}
              style={{
                flex: 1,
                marginVertical: responsiveHeight(0.5),
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomColor: this.state.General ? 'white' : null,
                  borderBottomWidth: this.state.General ? 3 : 0,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  General
                </Text>
              </View>
            </TouchableOpacity>
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
                  Business
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
                  Advert
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
          <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          >
          {this.state.Business ? (
            <View style={Styles.MainView2}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: responsiveHeight(5),
                  marginVertical: responsiveHeight(5),
                }}>
                <View style={{ flex: 0.5, justifyContent: 'flex-start' }}>
                  <Text> category</Text>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: 'flex-end',
                  }}>
                  <View
                    style={{
                      borderColor: 'gray',
                      borderBottomWidth: 2,
                      borderRightWidth: 1,
                      borderLeftWidth: 1,
                      borderTopWidth: 1,
                      borderRadius: responsiveHeight(1),
                    }}>
                    <Text
                      style={{
                        marginHorizontal: responsiveWidth(2),
                        marginVertical: responsiveHeight(0.5),
                      }}>
                      {' '}
                      + new category
                    </Text>
                  </View>
                </View>
              </View>
              {/* <View
                style={{
                  marginHorizontal: responsiveHeight(3),
                  flexDirection: 'row',
                }}>
                <Checkbox status={'unchecked'} color={TextColor} />
                <Text style={{ flex: 1, top: responsiveHeight(1.52) }}>Delete</Text>
                <AntDesign
                  name="delete"
                  color="gray"
                  size={responsiveFontSize(3)}
                  style={{
                    marginLeft: responsiveWidth(6),
                    marginTop: responsiveHeight(1),
                  }}
                />
                <MaterialCommunityIcons
                  name="pencil-outline"
                  color="gray"
                  size={responsiveFontSize(3)}
                  style={{
                    marginLeft: responsiveWidth(2),
                    marginTop: responsiveHeight(1),
                  }}
                />
              </View> */}
              {this.state.item.map((item, index) => {
                console.log(item);
                return (
                  <View
                    style={{
                      marginHorizontal: responsiveHeight(3),
                      flexDirection: 'row',
                    }}>
                    <Checkbox
                      status={item.checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.pressed(index);
                      }}
                      color={TextColor}
                    />
                    <Text style={{ flex: 1, top: responsiveHeight(1.52) }}>
                      {item.name}
                    </Text>
                    <AntDesign
                      name="delete"
                      color="gray"
                      size={responsiveFontSize(3)}
                      style={{
                        marginLeft: responsiveWidth(6),
                        marginTop: responsiveHeight(1),
                      }}
                      onPress={() => {
                        this.delete(item);
                      }}
                    />
                    <MaterialCommunityIcons
                      name="pencil-outline"
                      color="gray"
                      size={responsiveFontSize(3)}
                      style={{
                        marginLeft: responsiveWidth(2),
                        marginTop: responsiveHeight(1),
                      }}
                    />
                  </View>
                );
              })}


<LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Styles.LinearGradientSellButton}>
            <Button
              style={Styles.GivetButton}
              onPress={() => {
                // this.setState({ visibleReduceBalance: 'fancy' });
              }}
              contentStyle={{ height: responsiveHeight(6) }}
              labelStyle={{
                color: LightBackground,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.3),
              }}>
              Save
            </Button>
          </LinearGradient>


            </View>
          ) : this.state.Advert ? (
            <View style={[Styles.MainView2, { padding: 20 }]}>

              <Text>Link Facebook</Text>
              <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({linkfacebook: text,fieldcheck:false});
              }}
              value={this.state.linkfacebook}
              //placeholder={'Link Facebook'}
            />
            {fieldcheck ? (
                linkfacebook ? (
                  null
                ) : (
                  <Text style={{alignSelf: 'center', color: 'red'}}>
                    linkfacebook must not be empty.{console.log('left')}
                  </Text>
                )
              ) : null}
              <Text>Link tutorial</Text>
              <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({linktutorial: text,fieldcheck:false});
              }}
              value={this.state.linktutorial}
              //placeholder={'Link tutorial'}
            />
            {fieldcheck ? (
                linktutorial ? (
                  null
                ) : (
                  <Text style={{alignSelf: 'center', color: 'red'}}>
                    linktutorial must not be empty.{console.log('left')}
                  </Text>
                )
              ) : null}
              <Text>Weekly Code</Text>
              <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({weeklycode: text,fieldcheck:false});
              }}
              value={this.state.weeklycode}
              //placeholder={'Weekly Code'}
            />
            {fieldcheck ? (
                weeklycode ? (
                  null
                ) : (
                  <Text style={{alignSelf: 'center', color: 'red'}}>
                    weeklycode must not be empty.{console.log('left')}
                  </Text>
                )
              ) : null}
              <Text>Hashtag</Text>
              <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({hashtag: text,fieldcheck:false});
              }}
              value={this.state.hashtag}
              //placeholder={'Hashtag'}
            />
            {fieldcheck ? (
                hashtag ? (
                  null
                ) : (
                  <Text style={{alignSelf: 'center', color: 'red'}}>
                    hashtag must not be empty.{console.log('left')}
                  </Text>
                )
              ) : null}
              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={Styles.LinearGradientSellButton}>
                <Button
                  style={Styles.GivetButton}
                  onPress={() => {
                    this.setState({fieldcheck: true});
                   this.onSubmit()
                  }}
                  contentStyle={{ height: responsiveHeight(6) }}
                  labelStyle={{
                    color: LightBackground,
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  Save
            </Button>
              </LinearGradient>
              
            </View>

          ) : (
                <View style={Styles.MainView}>
                  <Chart />
                </View>
              )}
              </LinearGradient>
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
    paddingTop: 5
  },
  LinearGradientSellButton: {
    alignSelf: 'center',
    marginVertical: responsiveHeight(5),
    marginHorizontal: responsiveWidth(2),
    height: responsiveHeight(6),
    width: '60%',
    borderRadius: 60,
  },
  MainView: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: LightBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  MainView2: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height/1.15,
    backgroundColor: LightBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  inputPassword: {
    marginTop: responsiveHeight(2),
    width: '90%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: '2%',
  },
  Header: {
    width: '100%',
    height: responsiveHeight(13),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: LightBackground,
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    marginLeft: '4%',
    position: 'absolute',
    top: responsiveHeight(4.75),
  },
  GivetButton: {
    width: '100%',
    borderRadius: 8,
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
});
