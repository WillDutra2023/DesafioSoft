/* eslint-disable quote-props */
import { call, put, all } from 'redux-saga/effects';

import { requestTasks, requestUsers } from '~/webService';

import { Creators as HomeActions } from '~/store/ducks/home';

function* getNameUserTask(users, tasks) {
  const result = []
  tasks.forEach((task, indexTask) => {
    users.forEach((user, indexUser)=> {
      if(task.userId == user.id)
        result.push({user, task:{title: task.title, completed: task.completed}});
    });
  });
  return result;
}

export function* request() {
  try {
    const [users, tasks] = yield all([
      call(requestUsers),
      call(requestTasks),
    ]);
    const result = yield getNameUserTask(users.data, tasks.data)
    console.log(result)
    yield put(HomeActions.requestSucess(result));
  } catch (error) {
    console.log(error);
    yield put(HomeActions.requestError(error));
  }
}
