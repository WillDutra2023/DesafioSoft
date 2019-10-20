import React, { Component } from 'react';
import { Container, Text, ViewMap, styles} from './styles';

import MapView, { Marker } from 'react-native-maps';

export default class Responsavel extends Component {
  render() {
    const { navigation:{state} } = this.props;
    const {user, task} = state.params.users
    console.log(Number(user.address.geo.lat))
    console.log(Number(user.address.geo.lng))
    return  ( <Container>
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Telefone: {user.phone}</Text>
      <Text>Endereço: {user.address.street}</Text>
      <Text>Complemento: {user.address.suite}</Text>
      <Text>Cidade: {user.address.city}</Text>
      <ViewMap>
        <MapView
          style={styles.maps}
          region={{
            latitude: Number(user.address.geo.lat),
            longitude: Number(user.address.geo.lng),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          zoomTapEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: Number(user.address.geo.lat),
              longitude: Number(user.address.geo.lng),
            }}
            title={user.name}
            description={task.title}
          />
        </MapView>
      </ViewMap>
    </Container>);
  }
}
