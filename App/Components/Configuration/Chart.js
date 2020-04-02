import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../Globals/colors';
import { Button, Checkbox } from 'react-native-paper';

export default class Chart extends Component {
  state = {
    profitLevel: [
      { no: 1, percent: '10%' },
      { no: 2, percent: '4%' },
      { no: 3, percent: '4%' },
      { no: 4, percent: '2%' },
      { no: 5, percent: '2%' },
      { no: 6, percent: '2%' },
      { no: 7, percent: '2%' },
      { no: 8, percent: '2%' },
      { no: 9, percent: '2%' },
      { no: 10, percent: '2%' },
    ],
    MinimumLevel: [
      { no: 1, percent: '1' },
      { no: 2, percent: '1' },
      { no: 3, percent: '1' },
      { no: 4, percent: '1' },
      { no: 5, percent: '1' },
      { no: 6, percent: '1' },
      { no: 7, percent: '1' },
      { no: 8, percent: '1' },
      { no: 9, percent: '1' },
      { no: 10, percent: '1' },
    ],
    Text: [
      { text: '% de 1-4 venta', time: '25' },
      { text: '% depues de 4ta venta', time: '6' },
    ],
    Text2: [
      { text: 'Maduracion de compra', time:   '7' },
      { text: 'Tiempo de envio USDT', time: '48' },

    ],
    Text3: [
      { text: 'Costo de desbloqueo', time: '0.009' },
      { text: 'Min. Sell', time: '0.0048' },

    ],
    Text4: [
      { text: '10 ventas', time: '1' },
      { text: '20 ventas', time: '1' },
      
    ],

    Text5: [
      { text: '30 ventas', time: '1' },
      { text: '40 ventas', time: '1' },
      
    ],
    Text6: [
      { text: '50 ventas', time: '1' },
      { text: '60 ventas', time: '1' },
      
    ],
    Text7: [
      { text: 'Direccion USDT para desbloqueo', time: '1xgd74gd4gdfg87dfggr' },
    ],
    checked1: true,
    checked2: true,
    packArr: [
     {time: '10'},
     {time: '30'},
     {time: '80'},
     {time: '100'},
     {time: '200'},
     {time: '400'},
     {time: '600'},
     {time: '800'},
     {time: '1000'},
     {time: '1200'},
     {time: '1400'},
     {time: '1600'},
     {time: '1800'},
     {time: '2000'},
     {time: '2200'},
     {time: '2400'},,
    ],
  };
  renderItem = post => {
    const item = post.item;
    const index = post.index;
    let arrayLength = this.state.packArr.length - 1;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={Styles.packView}>
          <Text style={Styles.btnTxt}>{item}</Text>
        </View>
        {index === arrayLength ? (
          <View style={Styles.AddButtonView}>
            <Text
              style={[Styles.smallFont, { color: 'blue', fontWeight: 'bold' }]}>
              {' '}
              + New Pack
            </Text>
          </View>
        ) : null}
      </View>
    );
  };
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <Text style={[Styles.smallFont, { marginTop: 5 }]}>
            Profit Level
          </Text>
          <View style={Styles.profitLevelView}>
            {this.state.profitLevel.map(item => (
              <View>
                <View style={Styles.profitNested1}>
                  <Text style={[Styles.smallFont, { fontWeight: 'bold' }]}>
                    {item.no}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    // width: responsiveWidth(9),
                    // height: responsiveHeight(4),
                  }}>
                  <TextInput placeholder={item.percent} placeholderTextColor={TextColor} style={Styles.extraSmallFont} />
                </View>
              </View>
            ))}
          </View>
          <Text style={[Styles.smallFont, { marginTop: 5 }]}>
            Minimum direct per Level
          </Text>
          <View style={Styles.MinimumLevelView}>
            {this.state.MinimumLevel.map(item => (
              <View>
                <View style={Styles.profitNested1}>
                  <Text style={[Styles.smallFont, { fontWeight: 'bold' }]}>
                    {item.no}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    // width: responsiveWidth(9),
                    // height: responsiveHeight(4),
                  }}>
                  <TextInput placeholder={item.percent} placeholderTextColor={TextColor} style={Styles.extraSmallFont} />
                </View>
              </View>
            ))}
          </View>
          <View style={Styles.TextParentView}>
            {this.state.Text.map(item => (
              <View style={Styles.MainTextView}>
                <Text
                  style={[
                    Styles.smallFont,
                    { paddingVertical:5, color: TextColor },
                  ]}>
                  {item.text}
                </Text>
                <View style={Styles.TimeView}>
                  <TextInput placeholder ={item.time} placeholderTextColor={TextColor} style={[Styles.smallFont]}/>
                </View>
              </View>
            ))}
          </View>
          <View style={Styles.TextParentView}>
            {this.state.Text2.map(item => (
              <View style={Styles.MainTextView}>
                <Text style={[Styles.smallFont, { paddingVertical:5, color: TextColor }]}>
                  {item.text}
                </Text>
                <View style={Styles.TimeView}>
                  <TextInput  placeholder = {item.time} placeholderTextColor={TextColor} style={[Styles.smallFont]}/>
                </View>
              </View>
            ))}
          </View>

          <View style={Styles.TextParentView}>
            {this.state.Text3.map(item => (
              <View style={Styles.MainTextView}>
                <Text style={[Styles.smallFont, { paddingVertical:5, color: TextColor }]}>
                  {item.text}
                </Text>
                <View style={Styles.TimeView}>
                  <TextInput  placeholder = {item.time} placeholderTextColor={TextColor} style={[Styles.smallFont]}/>
                </View>
              </View>
            ))}
          </View>

          <View style={Styles.TextParentView}>
            {this.state.Text4.map(item => (
              <View style={Styles.MainTextView}>
                <Text style={[Styles.smallFont, { paddingVertical:5, color: TextColor }]}>
                  {item.text}
                </Text>
                <View style={Styles.TimeViewLarge}>
                  <TextInput  placeholder = {item.time} placeholderTextColor={TextColor} style={[Styles.smallFont]}/>
                </View>
              </View>
            ))}
          </View>

          <View style={Styles.checkboxParentView}>
            <View style={Styles.LeftView}>
              <Text style={Styles.smallFont}>cantidad máxima para pasar al available(compra o comisiones red)</Text>

              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View style={Styles.TopCheckBoxView}>
                <Checkbox
                  status={this.state.checked1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({ checked1: !this.state.checked1 });
                  }}
                  color={TextColor}
                />
                <Text style={Styles.TopText}>current pack</Text>
              </View>
              <View style={Styles.TopCheckBoxView}>
                <Checkbox
                  status={this.state.checked2 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({ checked2: !this.state.checked2 });
                  }}
                  color={TextColor}
                />
                <Text style={Styles.TopText}>current %</Text>
              </View>
              </View>


            </View>
            {/* <View style={Styles.RightView}>
              <Text style={Styles.smallFont}>Payment Address Unlocking</Text>
              <View style={Styles.inputView}>
                <TextInput  placeholder = {'X35234685DFjn411'} placeholderTextColor={TextColor} style={Styles.smallFont}/>
              </View>
            </View> */}
          </View>
          
          <Text style={[Styles.smallFont, { marginTop: 5, marginRight: '85%' }]}>
            Pack
          </Text>

          <FlatList
            data={this.state.packArr}
            numColumns={6}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={item => this.renderItem(item)}
          />
          <LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Styles.LinearGradientSellButton}>
            <Button
              style={Styles.GivetButton}
              onPress={() => {
                this.setState({ visibleReduceBalance: 'fancy' });
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
        </ScrollView>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  smallFont: {
    color: TextColor,
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    padding: 0,
    flex:1,
    margin: 0,
    borderWidth: 0,
  },
  extraSmallFont: {
    color: TextColor,
    fontSize: responsiveFontSize(1.4),
    padding: 0,
    margin: 0,
    borderWidth: 0,
    height: responsiveHeight(4),
    textAlign:'center'

  },
  profitLevelView: {
    marginTop:5,
    flexDirection: 'row',
  },
  profitNested1: {
    backgroundColor: 'rgb(210,210,210)',
    borderRightColor: White,
    borderRightWidth: 0.5,
    width: responsiveWidth(9),
    height: responsiveHeight(4),
  },
  MinimumLevelView: {
    marginTop:5,
    flexDirection: 'row',
  },
  TextParentView: {
    marginTop:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TimeView: {
    width: responsiveWidth(35),
    height: responsiveHeight(5),
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 8,
    backgroundColor: White,
    elevation: 3,
  },
  TimeViewLarge: {
    width: responsiveWidth(60),
    height: responsiveHeight(5),
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 8,
    backgroundColor: White,
    elevation: 3,
  },
  MainTextView: {
   flex:1,
   paddingHorizontal:10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxParentView: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: responsiveHeight(5),
    borderRadius: 8,
    elevation: 5,
    backgroundColor: White,
    alignSelf: 'center',
  },
  TopCheckBoxView: {
    width: '85%',
    height: responsiveHeight(6),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  TopText: {
    fontSize: responsiveFontSize(2),
    color: TextColor,
    left: responsiveWidth(2),
  },
  LeftView: {
    width: '50%',
  },
  RightView: {
    width: '50%',
  },
  packView: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(13),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: responsiveWidth(1),
  },
  AddButtonView: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  GivetButton: {
    width: '100%',
    borderRadius: 8,
  },
  LinearGradientSellButton: {
    alignSelf: 'center',
    marginVertical: responsiveHeight(5),
    marginHorizontal: responsiveWidth(2),
    height: responsiveHeight(6),
    width: '60%',
    borderRadius: 8,
  },
  btnTxt:{
    fontSize:responsiveFontSize(1.7)
  }
});
