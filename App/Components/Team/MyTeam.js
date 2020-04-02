import React, {Component} from 'react';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor} from '../../Globals/colors';

export default class Login extends Component {
  state = {
    DATA: [
      {id: 1, name: 'Alferado Zevalous', icon: 'user-follow'},
      {
        id: 2,
        name: 'MariLous Campus',
        icon: 'user-follow',
        ParentNestedList: true,
        NestedList: true,
        ParentNestedListname: 'Gamela Gabilo',
      },
      {id: 3, name: 'Princess Diana', icon: 'user-follow'},
    ],
    inputName: '',
    ParentNestedList: false,
  };
  render() {
    return (
      <View>
        <View style={Styles.ContactListView}>
          {this.state.DATA.map((item, index) =>
            item.ParentNestedList ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      ParentNestedList: !this.state.ParentNestedList,
                    });
                  }}
                  style={Styles.Touch}>
                  <SimpleLineIcon
                    name={item.icon}
                    color={TextColor}
                    size={40}
                  />
                  <Text style={Styles.ContactNameText}> {item.name} </Text>
                </TouchableOpacity>
                {this.state.ParentNestedList ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        ParentNestedList: !this.state.ParentNestedList,
                      });
                    }}
                    style={[Styles.Touch, {marginLeft: responsiveWidth(5)}]}>
                    <SimpleLineIcon
                      name={item.icon}
                      color={TextColor}
                      size={40}
                    />
                    <Text style={Styles.ContactNameText}>
                      {' '}
                      {item.ParentNestedListname}{' '}
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              <TouchableOpacity style={Styles.Touch}>
                <SimpleLineIcon name={item.icon} color={TextColor} size={40} />
                <Text style={Styles.ContactNameText}> {item.name} </Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  
  ContactListView: {
    marginTop:responsiveHeight(5),
    width: '60%',
    alignSelf: 'center',
  },
  ContactNameText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
    width: '70%',
  },
  Touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(8),
    alignItems: 'center',
  },
});
