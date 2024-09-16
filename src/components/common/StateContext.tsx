import { createContext, useReducer, PropsWithChildren } from 'react';

type State = {
  searchQuery: string;
  currentPage: number;
};

interface Action {
  type: string;
  payload?: any;
}

export enum ActionTypes {
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

interface SetSearchQueryAction extends Action {
  type: ActionTypes.SET_SEARCH_QUERY;
  payload: string;
}

interface SetCurrentPageAction extends Action {
  type: ActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

type StateActions = SetSearchQueryAction | SetCurrentPageAction;

const initialState: State = {
  searchQuery: '',
  currentPage: 1,
};

export const StateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<StateActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: StateActions): State => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
  }
};

export const StateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
