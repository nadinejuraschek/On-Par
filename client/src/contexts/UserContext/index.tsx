import { createReducerContext } from "react-use";
import { ACTIONS, IUserContext, TUserContextDispatchAction } from "./types";

const reducer = (state: IUserContext, action: TUserContextDispatchAction): IUserContext => {
  switch(action.type) {
  case ACTIONS.SET_USER:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

const initialState = {
  user: null,
};

const [useUserContext, UserContextProvider] = createReducerContext(reducer, initialState);

export { useUserContext, UserContextProvider };
