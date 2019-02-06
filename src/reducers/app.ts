import { TypeKeys, ActionTypes } from '../actions/index';
import { FullName } from '../FullName';

interface AppState {
  fullName: FullName;
}

const getInitialState = () => {
  return {
    fullName: new FullName('Edward', 'John', 'Silverton')
  }
};

const app = (state: AppState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.APP_SET_FULLNAME: {
      return { ...state, fullName: action.fullName }
    }
  }

  return state;
};

export default app;
