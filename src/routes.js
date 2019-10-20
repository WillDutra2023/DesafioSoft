import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Responsavel from '~/pages/Responsavel';

import { colors } from '~/styles';

import { saveLogado } from '~/asyncStorage';
import { NavigationActions } from 'react-navigation';

logout = (navigation) => {
  saveLogado(false)
  const navigateAction = NavigationActions.navigate({
    routeName: 'Login',

    params: {},

    action: [],
  });

  navigation.dispatch(navigateAction);
}

const HomeStack = createStackNavigator(
  {
    // All the screen from the Screen1 will be indexed here
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Tarefas',
        headerLayoutPreset: 'center',
        headerTitleStyle: { flex: 1, justifyContent: 'center' },
        headerStyle: {
          backgroundColor: colors.white,
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          borderBottomWidth: 0,
        },
        headerTintColor: colors.black,
        headerRight: (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}
          >
            <TouchableOpacity onPress={() =>{
                this.logout(navigation)
            }}>
              <Image style={{width:30, height:30,marginRight:10}} source={require('~/images/logout.png')}></Image>
            </TouchableOpacity>
          </View>
        ),
      }),
    },
    Responsavel: {
      screen: Responsavel,
      navigationOptions: ({navigation}) => ({
        title: 'Responsavel',
        headerLayoutPreset: 'center',
        headerTitleStyle: { flex: 1, justifyContent: 'center' },
        headerStyle: {
          backgroundColor: colors.gray89,
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          borderBottomWidth: 0,
        },
        headerTintColor: colors.black,
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
