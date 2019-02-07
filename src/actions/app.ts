import { TypeKeys } from '../actions/index';

export interface AppSetFullNameAction {
  type: TypeKeys.APP_SET_FULLNAME,
  fullName: string;
}

export interface AppSetEmailAction {
  type: TypeKeys.APP_SET_EMAIL,
  email: string;
}

export const appSetFullName = (fullName: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_FULLNAME,
    fullName: fullName
  })
};

export const appSetEmail = (email: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_EMAIL,
    email: email
  })
};
