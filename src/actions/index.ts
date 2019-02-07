import {
  AppSetFullNameAction,
  AppSetEmailAction
} from './app';

export interface NullAction {
  type: TypeKeys.NULL
}

// Keep this type updated with each known action
export type ActionTypes =
  | NullAction
  | AppSetFullNameAction
  | AppSetEmailAction
;

export enum TypeKeys {
  // Won't match anything
  NULL = 'NULL',
  ERROR = 'ERROR',
  APP_SET_FULLNAME = 'APP_SET_FULLNAME',
  APP_SET_EMAIL = 'APP_SET_EMAIL'
};
