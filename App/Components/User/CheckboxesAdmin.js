import React, {Component} from 'react';

import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White} from '../../Globals/colors';
import {Checkbox} from 'react-native-paper';
import Modal from './ModalAdmin';

export default class Login extends Component {
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    visible: false,
    pressedButton: '',
    Data: [
      {
        id: 0,
        Name: 'lolo',
        Email: 'dd@h',
        pass1: '*****',
        pass2: '*****',
        Addressbtc: '1Bd5dbcasgx15d',
        Logo: require('../../Assets/icons/eye.svg'),
        checked: false,
      },
      {
        id: 1,
        Name: 'lolo',
        Email: 'dd@h',
        pass1: '*****',
        pass2: '*****',
        Addressbtc: '1Bd5dbcasgx15d',
        Logo: require('../../Assets/icons/eye.svg'),
        checked: false,
      },
      {
        id: 2,
        Name: 'lolo',
        Email: 'dd@h',
        pass1: '*****',
        pass2: '*****',
        Addressbtc: '1Bd5dbcasgx15d',
        Logo: require('../../Assets/icons/eye.svg'),
        checked: false,
      },
      {
        id: 3,
        Name: 'lolo',
        Email: 'dd@h',
        pass1: '*****',
        pass2: '*****',
        Addressbtc: '1Bd5dbcasgx15d',
        Logo: require('../../Assets/icons/eye.svg'),
        checked: false,
      },
      {
        id: 4,
        Name: 'lolo',
        Email: 'dd@h',
        pass1: '*****',
        pass2: '*****',
        Addressbtc: '1Bd5dbcasgx15d',
        Logo: require('../../Assets/icons/eye.svg'),
        checked: false,
      },
    ],
  };
  openModal =(index)=>{
    let newArr = [...this.state.Data];
   if (newArr[index].checked === true)  
   {
    this.setState({visible:'fancy'})
   }
  }
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    return (
      <View style={Styles.middleCheckBoxView}>
        <Checkbox
          status={item.checked ? 'checked' : 'unchecked'}
          onPress={() => {
            this.pressed(index);
          }}
          color={TextColor}
        />
        <TouchableOpacity onPress ={()=>{this.openModal(index)}} style={Styles.ColoredMainView}>
          <View style={Styles.TableHeadingView}>
            <Text style={Styles.TableheadingText}>Email</Text>
            <Text style={Styles.TableheadingText}>Name</Text>
            <Text style={Styles.TableheadingText}>Password 1</Text>
            <Text style={Styles.TableheadingText}>Password 2</Text>
            <Text style={Styles.TableheadingText}>Address btc</Text>
          </View>
          <View style={Styles.TableContentView}>
            <Text style={Styles.TableContentText}>{item.Email}</Text>
            <Text style={Styles.TableContentText}>{item.Name}</Text>
            <Text style={Styles.TableContentText}>{item.pass1}</Text>
            <Text style={Styles.TableContentText}>{item.pass2}</Text>
            <Text style={Styles.TableContentText}>{item.Addressbtc}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  pressed = index => {
    let newArr = [...this.state.Data];
    newArr[index].checked = !newArr[index].checked;
    this.setState({Data: newArr});
  };
  closeModal = () => {
    this.setState({visible: false});
  };
  render() {
    return (
      <View style={Styles.Container}>
        <View style={Styles.TopCheckBoxView}>
          <Checkbox
            status={this.state.checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked1: !this.state.checked1});
            }}
            color={TextColor}
          />
          <Text style={Styles.TopText}>Select everything</Text>
        </View>
        <FlatList
          data={this.state.Data}
          keyExtractor={item => item.id}
          renderItem={item => this.PrintCards(item)}
          contentContainerStyle={{paddingBottom: responsiveHeight(5)}}
          ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
        />
        <Modal
          closeModal={this.closeModal}
          pressedButton={this.state.pressedButton}
          ModalState={this.state.visible}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  Container: {
    marginTop: responsiveHeight(2),
    width: '98%',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor:'#ffffff'
  },
  TopCheckBoxView: {
    width: '98%',
    height: responsiveHeight(6),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  TopText: {
    fontSize: responsiveFontSize(2),
    color: 'grey',
    left: responsiveWidth(2),
  },
  middleCheckBoxView: {
    width: '98%',
    borderBottomColor:'#D5D5D5',
    borderBottomWidth:0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    right: Platform.OS === 'ios' ? (responsiveWidth(5)): 0
  },
  ColoredMainView: {
    backgroundColor: White,
    width: '90%',
  },
  TableContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TableHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TableheadingText: {
    marginTop: responsiveHeight(1),
    color: 'rgba(0,0,0,0.8)',
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
    width: '20%',
  },
  TableContentText: {
    marginTop: responsiveHeight(1),
    color: 'rgba(0,0,0,0.8)',
    fontSize: responsiveFontSize(1.3),
    width: '20%',
    textAlign: 'center',
  },
  Seprator: {
    marginBottom: responsiveHeight(1),
  },
  PayButton: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
    borderRadius: 8,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoPayButton: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
