import React, {Component} from 'react';

import {FlatList, TouchableOpacity} from 'react-native';

import { ViewContainer } from './styles';

import {Creators as HomeActions} from '~/store/ducks/home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListItem from "~/components/ListItem"

import {navigate} from '~/services/navigation';

import { colors }  from '~/styles';



class Home extends Component {
  state = {
    page: 1,
    todosPerPage: 30,
    currentPage: 1,
  };

  componentDidMount() {
    this.props.request();
  }

  goToPageResp = (item) => {
    navigate("Responsavel", {
      users: item
    })
  }

  loadMore = () => {

  }

  render() {
    const {tasks} = this.props;
    return (
      <ViewContainer theme={{color : colors.lightGray}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={tasks}
          renderItem={item => {
            return (
              <TouchableOpacity onPress={()=>{
                  this.goToPageResp(item.item)
              }}>
                <ListItem item={item.item}></ListItem>
              </TouchableOpacity>
            );
          }}
        />
      </ViewContainer>
    );
  }
}

const mapStateToProps = state => ({
  users: state.home.users,
  tasks: state.home.tasks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HomeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
