import React from 'react';
import {View, Platform} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/pages/Login';
import Home from '~/pages/Home';

import {colors} from '~/styles';

const HomeStack = createStackNavigator(
  {
    // All the screen from the Screen1 will be indexed here
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'Tarefas',
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
        headerTitleStyle: {flex: 1, justifyContent: 'center'},
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        HomeStack,
      },
      {
        initialRouteName: userLogged ? 'HomeStack' : 'Login',
      },
    ),
  );

export default Routes;
