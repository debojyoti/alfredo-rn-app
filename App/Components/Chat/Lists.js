import React, {Component} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White } from '../../Globals/colors';

export default class Login extends Component {
  state = {
    DATA: [
      {
        id: 1,
        Logo: require('../../Assets/Images/logo2.png'),
        Name: 'Marilu Campos',
        Text: 'Hey ! are you there?',
      },
      {
        id: 2,
        Logo: require('../../Assets/Images/logo2.png'),
        Name: 'July Chavez',
        Text: 'Hey ! are you there?',
        TextCount: '2',
      },
      {
        id: 3,
        Logo: require('../../Assets/Images/logo2.png'),
        Name: 'Pedro Ramirez',
        Text: 'Hey ! are you there?',
      },
      {
        id: 3,
        Logo: require('../../Assets/Images/logo2.png'),
        Name: 'jesus Chavez',
        Text: 'Hey ! are you there?',
        TextCount: '4',
      },
    ],
  };
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Chat');
        }}
        style={Styles.SuperCardView}>
        <View style={Styles.LeftView}>
          <Image style={Styles.Logo} source={item.Logo} />
        </View>
        <View style={Styles.RightView}>
          <Text style={Styles.NameText}>{item.Name}</Text>
          <Text style={Styles.messageText}>{item.Text}</Text>
        </View>
        {item.TextCount ? (
          <View style={Styles.TextCountView}>
            <View style={Styles.colorView}>
              <Text style={Styles.TextCount}>{item.TextCount}</Text>
            </View>
          </View>
        ) : (
          <View style={Styles.WithoutTextCountView} />
        )}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex:1}}>
        {/* <View style={Styles.inputView}>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({inputName: text});
            }}
            value={this.state.inputName}
            placeholder={'Search'}
          />
        </View> */}
        <FlatList
          data={this.state.DATA}
          keyExtractor={item => item.id}
          renderItem={item => this.PrintCards(item)}
          contentContainerStyle={Styles.ContainerStyle}
          ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  inputName: {
    marginTop: responsiveHeight(1),
    width: '80%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: White,
    padding: '2%',
    borderColor: White,
  },
  inputView: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(15),
  },

  Touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(8),
    alignItems: 'center',
  },
  ContainerStyle: {
    // width: '95%',
    // alignSelf: 'center',
    paddingVertical: responsiveHeight(2),
  },
  Seprator: {
    height: responsiveHeight(0.1),
    backgroundColor: 'white',
  },
  SuperCardView: {
    paddingHorizontal:10,
    flex:1,
    elevation: 5,
    paddingVertical: responsiveHeight(1),
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  LeftView: {
    
    justifyContent: 'center',
  },
  RightView: {
   flex:1,
   justifyContent:'center',
   paddingHorizontal:10
  },
  Logo: {
    width: responsiveWidth(15),
    height: responsiveHeight(7.6),
  },
  NameText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.5),
  },
  messageText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },
  TextCountView: {
    
  },
  colorView: {
    backgroundColor: TextColor,
    height: responsiveHeight(3),
    width: responsiveHeight(3),
    borderRadius: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextCount: {
    color: White,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  WithoutTextCountView: {
    width: '8%',
  },
});
