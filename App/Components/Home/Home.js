import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { White, LightBackground} from '../../Globals/colors';
import Header from './Header';
import ModalComponent from '../ModalComponent/ModalComponent';
import ModalBox from '../ModalComponent/ModalBox';

export default class Login extends Component {
  state = {
    DATA: [
      {
        id: 0,
        heading1: 'Total buy',
        heading2: '',
        heading3: 'Total sell',
        heading4: '37 USDT',
        heading5: '',
        heading6: '374 USDT',
      },
      {
        id: 1,
        heading1: 'User buy',
        heading2: 'User sell',
        heading3: 'User delete',
        heading4: '80',
        heading5: '90',
        heading6: '90',
      },
      {
        id: 2,
        heading1: 'Total user',
        heading2: 'User unlocked',
        heading3: 'Users with less than 4 sell',
        heading4: '50',
        heading5: '30',
        heading6: '5',
      },
    ],
    Sell: true,
    Buy: false,
    ModalState: false,
    Status: 'Success',
  };
  closeModal = () => {
    this.setState({ModalState: false});
  };
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ModalState: 'fancy'});
          }}>
          <LinearGradient
            colors={['#E61EB6', '#ECAA0D']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={Styles.SuperView}>
            <View style={Styles.NestedView1}>
              <Text style={Styles.quantityText}>{item.heading1}</Text>
              <Text style={Styles.quantityText}>{item.heading2}</Text>
              <Text style={Styles.quantityText}>{item.heading3}</Text>
            </View>
            <View style={Styles.NestedView2}>
              <Text style={Styles.DateText}>{item.heading4}</Text>
              <Text style={Styles.DateText}>{item.heading5}</Text>
              <Text style={Styles.DateText}>{item.heading6}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        {/* <ModalBox  
      text={'Your Purchase Entered the Queue Successfully'}
        Status={this.state.Status}
        closeModal={this.closeModal}
        ModalState={this.state.ModalState}/> */}
        <ModalComponent
          text={'Your Purchase Entered the Queue Successfully'}
          HeaderText={'BUY'}
          Status={this.state.Status}
          closeModal={this.closeModal}
          ModalState={this.state.ModalState}
        />
      </View>
    );
  };

  openDrawer = props => {
    props.navigation.openDrawer();
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
          <Header
            {...this.props}
            openDrawer={() => {
              this.openDrawer(this.props);
            }}
          />
          <View style={Styles.MainView}>
            <FlatList
              data={this.state.DATA}
              keyExtractor={item => item.id}
              renderItem={item => this.PrintCards(item)}
              contentContainerStyle={Styles.ContainerStyle}
              ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
            />
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
  },
  MainView: {
    flex: 1,
    backgroundColor: LightBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  ButtonView: {
    width: '80%',
    height: responsiveHeight(10),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LinearButton: {
    width: '100%',
    borderRadius: 8,
  },
  WhiteButton: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  LinearGradientSellButton: {
    width: '40%',
    borderRadius: 8,
  },
  NormalButton: {
    width: '40%',
    borderRadius: 8,
  },
  ContainerStyle: {
    width: '95%',
    alignSelf: 'center',
    paddingVertical: responsiveHeight(2),
  },
  Seprator: {
    marginTop: responsiveHeight(2),
  },
  SuperView: {
    width: '95%',
    height: responsiveHeight(18),
    borderRadius: 15,
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NestedView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  NestedView2: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  DateText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'center',
  },
  quantityText: {
    color: White,
    fontSize: responsiveFontSize(1.8),
    width: '30%',
    textAlign: 'center',
  },
});
