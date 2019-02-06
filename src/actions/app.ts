import { TypeKeys } from '../actions/index';

export interface AppSetFullNameAction {
  type: TypeKeys.APP_SET_FULLNAME,
  fullName: string;
}

export const appSetFullName = (fullName: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_FULLNAME,
    fullName: fullName
  })
};
