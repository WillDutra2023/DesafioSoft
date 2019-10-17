/**
  ACTION TYPES
 */

export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCESS: 'LOGIN_SUCESS',
  FAILURE: 'LOGIN_FAILURE',
  REQ_CLEAN_PROPS: 'LOGIN_REQ_CLEAN_PROPS',
  CLEAR_PROPS: 'LOGIN_CLEAR_PROPS',
  REQ_EMAIL: 'REQ_EMAIL',
  SUCESS_EMAIL: 'SUCESS_EMAIL',
  FAILURE_EMAIL: 'FAILURE_EMAIL',
  ISCONNECTED: 'ISCONNECTED_LOGIN',
};

/**
  REDUCERS
 */

const INITIAL_STATE = {
  username: '',
  password: '',
  error: false,
  errorEmail: null,
  msgErrorWSEmail: '',
  loading: false,
  response: null,
  msgErrorWS: '',
  logado: null,
  visibleToast: false,
  loadingEmail: false,
  isConnected: true,
  errorInternet: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCESS:
      return {
        ...state,
        response: action.payload.response,
        logado: action.payload.logado,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: true,
        msgErrorWS: action.payload.responseError,
        loading: false,
      };
    case Types.CLEAR_PROPS:
      return {
        ...state,
        logado: null,
        error: false,
        errorEmail: null,
        msgErrorWSEmail: '',
        showError: '',
      };
    case Types.REQ_EMAIL:
      return {
        ...state,
        loadingEmail: true,
      };
    case Types.SUCESS_EMAIL:
      return {
        ...state,
        errorEmail: action.payload.errorEmail,
        error: false,
        loadingEmail: false,
      };
    case Types.FAILURE_EMAIL:
      return {
        ...state,
        msgErrorWSEmail: action.payload.msgError,
        errorEmail: action.payload.errorEmail,
        loadingEmail: false,
      };
    case Types.ISCONNECTED:
      return {
        ...state,
        isConnected: action.payload.isConnected,
        errorInternet: !action.payload.isConnected,
      };
    default:
      return state;
  }
}

/**
  ACTIONS CREATORS
 */

export const Creators = {
  loginRequest: (username, password) => ({
    type: Types.REQUEST,
    payload: { username, password },
  }),

  loginSucess: (response, logado) => ({
    type: Types.SUCESS,
    payload: { response, logado },
  }),

  loginError: responseError => ({
    type: Types.FAILURE,
    payload: { responseError },
  }),

  reqCleanProps: () => ({
    type: Types.REQ_CLEAN_PROPS,
  }),

  clearProps: () => ({
    type: Types.CLEAR_PROPS,
  }),

  emailRequestEmail: email => ({
    type: Types.REQ_EMAIL,
    payload: { email },
  }),

  emailSucessEmail: errorEmail => ({
    type: Types.SUCESS_EMAIL,
    payload: { errorEmail },
  }),

  emailFailureEmail: (msgError, errorEmail) => ({
    type: Types.FAILURE_EMAIL,
    payload: { msgError, errorEmail },
  }),

  requestIsConnected: isConnected => ({
    type: Types.ISCONNECTED,
    payload: { isConnected },
  }),
};
