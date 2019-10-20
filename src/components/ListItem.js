import React, {Component, PureComponent} from 'react';

import styled from 'styled-components/native';

// import { Container } from './styles';

export const ViewList = styled.View`
  flex-grow: 1;
  height: 100;
  flex-direction: row;
  background-color: white;
  margin-left: 10;
  margin-right: 10;
  margin-top: 10;
  margin-bottom: 10;
`;

export const ViewImage = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 10;
`;

export const ImageCheck = styled.Image`
  width: 40;
  height: 40;
  flex-direction: column;
`;

export const ViewData = styled.View`
  flex:1;
  flex-direction: column;
  margin-left: 10;
`;

export const TextTitle = styled.Text`
  font-size: 15;
  margin-top: 10;
`;

export default class Listitem extends PureComponent {

  getNameUserTask = (item) => {
    const { users } = this.props;
    let user = users.find(x => x.id == item.userId)
    return user.name;
  }

  render() {
    const {item} = this.props;
    var imageCheck = require('~/images/check.png')
    if(!item.task.completed){
      imageCheck = require('~/images/not-check.png')
    }
    return (
      <ViewList>
        <ViewImage>
          <ImageCheck source={imageCheck} resizeMode="contain"/>
        </ViewImage>
        <ViewData>
          <TextTitle>{item.user.name}</TextTitle>
          <TextTitle>{item.task.title}</TextTitle>
        </ViewData>
      </ViewList>
    );
  }
}
