import api from '~/services/api';

export const requestLogin = (params) => {
  const { username, password } = params;
  const req = {
    usuario: username.toString(),
    senha: password.toString(),
    ip: '',
    geoLocalizacao: '',
  };

  return api.post('login', req);
};

export const requestEmail = (params) => {
  const { email } = params;
  return api.post('recuperarSenha', { email });
};
