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
    this.setState({
      userLogged: !!isLogado,
    });
  }

  render() {
    const {userLogged} = this.state;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
