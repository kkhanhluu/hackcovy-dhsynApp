import React from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screens/Category';
import Categories from './screens/Categories';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import TimetableScreen from './screens/TimetableScreen';
import HotlineScreen from './screens/HotlineScreen';
import MapScreen from './screens/MapScreen';
import ChatScreen from './screens/ChatScreen';
import RegulationScreen from './screens/RegulationScreen';
import RequestScreen from './screens/RequestScreen';
import SymptomCheckScreen from './screens/SymptomCheckScreen';
import EnterPasswordScreen from './screens/EnterPasswordScreen';

export default class App extends React.Component {
  render() {
    const { Navigator, Screen } = createStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <Navigator initialRouteName={'EnterPasswordScreen'}>
          <Screen
            name='EnterPasswordScreen'
            component={EnterPasswordScreen}
            options={{
              title: 'Quaranhome',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />

          <Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: 'Home',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
              headerLeft: null,
            }}
          />

          <Screen
            name='PostScreen'
            component={PostScreen}
            options={{
              title: 'Bảng tin',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='TimetableScreen'
            component={TimetableScreen}
            options={{
              title: 'Thời gian biểu',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='MapScreen'
            component={MapScreen}
            options={{
              title: 'Bản đồ',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='HotlineScreen'
            component={HotlineScreen}
            options={{
              title: 'Hotline',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='ChatScreen'
            component={ChatScreen}
            options={{
              title: 'Nhóm chat',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='RegulationScreen'
            component={RegulationScreen}
            options={{
              title: 'Nội quy',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='RequestScreen'
            component={RequestScreen}
            options={{
              title: 'Yêu cầu',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
          <Screen
            name='SymptomCheckScreen'
            component={SymptomCheckScreen}
            options={{
              title: 'Kiểm tra triệu chứng',
              headerStyle: { backgroundColor: '#0E76A8' },
              headerTintColor: '#fff',
            }}
          />
        </Navigator>
      </NavigationContainer>
    );
  }
}
