import api from '~/services/api';

export const requestBanner = async () => {
  const response = await api.get('banners');
  return response;
};

export const requestBlog = async () => {
  const response = await api.get('blogs');
  return response;
};

export const requestMarca = async () => {
  const response = await api.get('marcas');
  return response;
};
