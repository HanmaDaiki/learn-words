import { IAction } from '../interface/IAction';

const defaultState  = {
  name: '',
  email: '',
  token: localStorage.getItem('token') || ''
};

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_TOKEN = 'UPDATE_TOKEN'

const userReducer = (state: any = defaultState, action: IAction) => {
  switch(action.type) {
    case UPDATE_USER:
      return {...state, name: action.payload.name, email: action.payload.email};
    
    case UPDATE_TOKEN:
      localStorage.setItem('token', action.payload.token);
      return {...state, token: action.payload.token};

    default:
      return state;
  }
};

const actionUpdateUser = (payload: any) => ({type: UPDATE_USER, payload});
const actionUpdateToken = (payload: any) => ({type: UPDATE_TOKEN, payload})

export {userReducer, actionUpdateUser, actionUpdateToken};