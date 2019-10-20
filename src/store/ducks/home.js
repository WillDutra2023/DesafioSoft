/**
  ACTION TYPES
 */

export const Types = {
  REQUEST: 'REQUEST_HOME',
  REQUEST_SUCESS: 'REQUEST_SUCESS',
  ISCONNECTED: 'ISCONNECTED_HOME',
  FAILURE: 'FAILURE_HOME',
  CLEAR_PROPS: 'CLEAR_PROPS_HOME',
};

/**
  REDUCERS
 */

const INITIAL_STATE = {
  tasks: [],
  users: [],
  loading: false,
  error: false,
  refreshing: false,
  isConnected: true,
};

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
        refreshing: true,
      };
    case Types.REQUEST_SUCESS:
      return {
        ...state,
        tasks: action.payload.tasks,
        error: false,
        loading: false,
        refreshing: false,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: true,
        msgErrorWS: action.payload.responseError,
        loading: false,
        refreshing: false,
      };
    case Types.CLEAR_PROPS:
      return {
        ...state,
        blogs: '',
        marcas: '',
        banners: '',
        error: '',
        refreshing: false,
        modalErrorVisible: false,
        loading: false,
      };
    case Types.ISCONNECTED:
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };
    default:
      return state;
  }
}

/**
  ACTIONS CREATORS
 */

export const Creators = {
  request: () => ({
    type: Types.REQUEST,
  }),
  requestSucess: (tasks) => ({
    type: Types.REQUEST_SUCESS,
    payload: { tasks },
  }),
  requestError: (responseError) => ({
    type: Types.FAILURE,
    payload: { responseError },
  }),
  clearProps: () => ({
    type: Types.CLEAR_PROPS,
  }),
  requestIsConnected: (isConnected) => ({
    type: Types.ISCONNECTED,
    payload: { isConnected },
  }),
};
