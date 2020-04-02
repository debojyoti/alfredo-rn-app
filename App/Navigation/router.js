import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AuthLoadingScreen from '../Components/AuthLoading/AuthLoading';
import CustomDrawer from './CustomDrawer';
import Home from '../Components/Home/Home';
import Team from '../Components/Team/Team';
import ChatList from '../Components/Chat/ChatList';
import Chat from '../Components/Chat/Chat';
import ValidationAnnounce from '../Components/ValidationAnnounce/ValidationAnnounce';
import Business from '../Components/Business/Business';
import PayInToken from '../Components/PayInToken/PayToken';
import User from '../Components/User/User';
import Configuration from '../Components/Configuration/Configuration';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

var width = Dimensions.get('window').width / 1.2;
console.disableYellowBox = true;
 
const AuthStack = createStackNavigator(
  {
 Login:Login,
 Register:Register,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
  initialRouteName:'Login'
  }
)

const Drawer = createDrawerNavigator(
  {
    
    Home:Home,
    Team:Team,
    ChatList:ChatList,
    Chat:Chat,
    ValidationAnnounce:ValidationAnnounce,
    Business:Business,
    PayInToken:PayInToken,
    User:User,
    Configuration:Configuration
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer,
    defaultNavigationOptions: {
      header: null,
    },
    drawerWidth: '85%',
    drawerBackgroundColor: 'transparent',
  }
);

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoadingScreen: AuthLoadingScreen,
//       // Auth: AuthStack,
//       App: Drawer,
//     },
//     {
//       initialRouteName: 'AuthLoadingScreen',
//     },
//   ),
// );



  const AdminSwitchNavigator =  createSwitchNavigator(
      {
        AuthLoadingScreen: AuthLoadingScreen,
        Auth:AuthStack,
        App: Drawer,
      },
      {
        initialRouteName: 'AuthLoadingScreen',
      }
    );

export default createAppContainer(
  createSwitchNavigator(
    {  
       AppAdmin:AdminSwitchNavigator,
    },
    {
      initialRouteName: 'AppAdmin',
    }
  ),
);
