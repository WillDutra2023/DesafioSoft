import React, {Component} from 'react';
import createNavigator from '~/routes';
import {Provider} from 'react-redux';

import store from './store';
import {setNavigator} from './services/navigation';
import {getLogado} from '~/asyncStorage';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const isLogado = await getLogado();
    console.log('componentDidMount isLogado', isLogado);
    this.setState({
      userChecked: true,
      userLogged: !!isLogado,
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
