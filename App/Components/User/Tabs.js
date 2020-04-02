import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { LightBackground } from '../../Globals/colors';
import AddBalance from './Modals/AddBalance';
import ReduceBalance from './Modals/ReduceBalance';
export default class Tabs extends Component {
  state = {
    visibleAddBalance: false,
    visibleReduceBalance: false,
  };
  closeAddBalance = () => {
    this.setState({visibleAddBalance: false});
  };
  closeReduceBalance = () => {
    this.setState({visibleReduceBalance: false});
  };
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.FlexBottonView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={Styles.LinearGradientSellButton}>
              <TouchableOpacity
                
                onPress={() => {
                  this.props.navigation.navigate('UserSwitchNavigator');
                }}
                >
                <Text style={{textAlign: 'center', color: LightBackground,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(1.3)}}>
                  Login to {'\n'}User Account
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={Styles.LinearGradientSellButton}>
              <TouchableOpacity
                
                onPress={() => {
                  this.setState({visibleAddBalance: 'fancy'});
                }}
                >
                  <Text style={{textAlign: 'center', color: LightBackground,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(1.3)}}>
                  Add{'\n'}Balance
                </Text>
                
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={Styles.LinearGradientSellButton}>
            <TouchableOpacity
                
                onPress={() => {
                  this.setState({visibleReduceBalance: 'fancy'});
                }}
                >
                  <Text style={{textAlign: 'center', color: LightBackground,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(1.3)}}>
                  Reduce{'\n'}Balance
                </Text>
                
              </TouchableOpacity>
            </LinearGradient>
          </ScrollView>
        </View>

        <AddBalance
          {...this.props}
          closeAddBalance={this.closeAddBalance}
          AddBalanceState={this.state.visibleAddBalance}
        />
        <ReduceBalance
          {...this.props}
          closeReduceBalance={this.closeReduceBalance}
          ReduceBalanceState={this.state.visibleReduceBalance}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
  },

  LinearGradientSellButton: {
    marginHorizontal: responsiveWidth(2),
    height: responsiveHeight(6),
    borderRadius: 8,
    width:responsiveWidth(27),
    justifyContent:'center'
  },
  FlexBottonView: {
    width: '100%',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
  },
});
