import api from '~/services/api';

export const requestTasks = async () => {
  const response = await api.get('todos');
  return response;
};

export const requestUsers = async () => {
  const response = await api.get('users');
  return response;
};
