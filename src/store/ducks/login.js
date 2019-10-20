/**
  ACTION TYPES
 */

export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCESS: 'LOGIN_SUCESS',
  CLEAR_PROPS: 'LOGIN_CLEAR_PROPS',
};

/**
  REDUCERS
 */

const INITIAL_STATE = {
  logado: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        logado: action.payload.logado,
      };
    case Types.SUCESS:
      return {
        ...state,
        logado: action.payload.logado,
      };
    case Types.CLEAR_PROPS:
      return {
        ...state,
        logado: null,
      };
    default:
      return state;
  }
}

/**
  ACTIONS CREATORS
 */

export const Creators = {
  loginRequest: logado => {
    console.log(logado);
    return {
      type: Types.REQUEST,
      payload: {logado},
    };
  },
  loginSucess: logado => ({
    type: Types.SUCESS,
    payload: {logado},
  }),

  clearProps: () => ({
    type: Types.CLEAR_PROPS,
  }),
};
