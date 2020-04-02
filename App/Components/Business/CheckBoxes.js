import React, {Component} from 'react';
import ModalBox from '../ModalComponent/ModalBox';
import Icon from 'react-native-vector-icons/FontAwesome'
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
import {TextColor, White, LightBackground} from '../../Globals/colors';
import { Checkbox} from 'react-native-paper';
import Modal from './Modal';

export default class Login extends Component {
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    visible: false,
    ModalState:false,
    pressedButton: '',
    Data: [
      {
        id: 0,
        Name: 'lolo',
        user: 'dd@h',
        NameBusiness: 'ricosobar',
        amount: '230GVT',
        date: '12/02/2020',
        AddressLocation: 'Av : jose 234 lima',
        checked: false,
      },
      {
        id: 1,
        Name: 'lolo',
        user: 'dd@h',
        NameBusiness: 'ricosobar',
        amount: '230GVT',
        date: '12/02/2020',
        AddressLocation: 'Av : jose 234 lima',
        checked: false,
      },
      {
        id: 2,
        Name: 'lolo',
        user: 'dd@h',
        NameBusiness: 'ricosobar',
        amount: '230GVT',
        date: '12/02/2020',
        AddressLocation: 'Av : jose 234 lima',
        checked: false,
      },
      {
        id: 3,
        Name: 'lolo',
        user: 'dd@h',
        NameBusiness: 'ricosobar',
        amount: '230GVT',
        date: '12/02/2020',
        AddressLocation: 'Av : jose 234 lima',
        checked: false,
      },
      {
        id: 4,
        Name: 'lolo',
        user: 'dd@h',
        NameBusiness: 'ricosobar',
        amount: '230GVT',
        date: '12/02/2020',
        AddressLocation: 'Av : jose 234 lima',
        checked: false,
      },
    ],
  };
  openModal = index => {
    let newArr = [...this.state.Data];
    if (newArr[index].checked === true) {
      this.setState({visible: 'fancy'});
    }
  };
  onCancel = () => {
    this.setState({ModalState:false});
  }

  onDone = () => {
    this.setState({ModalState:false});
  }
  onDelete = () => {
    this.setState({ModalState:true});

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
        <TouchableOpacity
          onPress={() => {
            this.openModal(index);
          }}
          style={Styles.ColoredMainView}>
          <View style={Styles.TableHeadingView}>
            <Text style={Styles.TableheadingText}>Name</Text>
            <Text style={Styles.TableheadingText}>User</Text>
            <Text style={Styles.TableheadingText}>Name Business</Text>
            <Text style={Styles.TableheadingText}>Date</Text>
            <Text style={Styles.TableheadingText}>Address location</Text>
          </View>
          <View style={Styles.TableContentView}>
            <Text style={Styles.TableContentText}>{item.Name}</Text>
            <Text style={Styles.TableContentText}>{item.user}</Text>
            <Text style={Styles.TableContentText}>{item.NameBusiness}</Text>
            <Text style={Styles.TableContentText}>{item.date}</Text>
            <Text style={Styles.TableContentText}>{item.AddressLocation}</Text>
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
          {!this.props.showDelete
          
          &&
          <TouchableOpacity
            onPress={this.onDelete}
            style={{ position: "absolute", right: 10 }}
          >
            <Icon name="trash" color="#231659" size={30} />
          </TouchableOpacity>
          }
        </View>

        <FlatList
          data={this.state.Data}
          keyExtractor={item => item.id}
          renderItem={item => this.PrintCards(item)}
          contentContainerStyle={{paddingVertical: responsiveHeight(2)}}
          ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
        />
  <ModalBox  
      text={'Estas seguro que quieres eliminar este historico'}
        
        onCancel={this.onCancel}
        onDone={this.onDone}
        closeModal={this.closeModal}
        ModalState={this.state.ModalState}/>
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
    backgroundColor: 'white',
  },
  TopCheckBoxView: {
    width: '98%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    right: Platform.OS === 'ios' ? responsiveWidth(5) : 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    backgroundColor: 'white',
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
    marginTop: responsiveHeight(2),
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
