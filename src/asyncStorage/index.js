import { Constants } from '~/constants';
import AsyncStorage from '@react-native-community/async-storage';

export async function saveUsername(username) {
  try {
    await AsyncStorage.setItem(Constants.login.username, username);
  } catch (e) {
    console.log(e);
  }
}

export async function getUsername() {
  const username = await AsyncStorage.getItem(Constants.login.username);
  console.log(username);
  return username !== null ? username : '';
}

export async function savePassword(password) {
  try {
    await AsyncStorage.setItem(Constants.login.password, password);
  } catch (e) {
    console.log(e);
  }
}

export async function getPassword() {
  const password = await AsyncStorage.getItem(Constants.login.password);
  return password !== null ? password : '';
}

export async function saveLogado(logado) {
  await AsyncStorage.setItem(Constants.login.logado, JSON.stringify(logado));
}

export async function getLogado() {
  const logado = await AsyncStorage.getItem(Constants.login.logado);
  return JSON.parse(logado) !== null ? JSON.parse(logado) : false;
}

export async function saveRememberPassword({ rememberPassword }) {
  try {
    await AsyncStorage.setItem(Constants.login.rememberPassword, JSON.stringify(rememberPassword));
  } catch (e) {
    console.log(e);
  }
}

export async function getRememberPassword() {
  const isRemember = await AsyncStorage.getItem(Constants.login.rememberPassword);
  console.log('isRemember', JSON.parse(isRemember));
  return JSON.parse(isRemember) != null ? JSON.parse(isRemember) : false;
}

export async function saveCodigo(codigo) {
  try {
    await AsyncStorage.setItem(Constants.login.codigo, codigo);
  } catch (e) {
    console.log(e);
  }
}

export async function getCodigo() {
  const codigo = await AsyncStorage.getItem(Constants.login.codigo);
  return codigo !== null ? codigo : 0;
}
