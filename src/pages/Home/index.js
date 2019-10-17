import React, {Component} from 'react';

import {Text, Image, TouchableOpacity, View} from 'react-native';

import {} from './styles';

import api from '~/services/api';
import FooterNavigation from '~/components/FooterNavigation';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>HOME</Text>
      </View>
    );
  }
}
