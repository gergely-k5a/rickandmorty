import { useContext } from 'react';
import { ActionTypes, StateContext } from '../components/common/StateContext';

const useStateContext = () => {
  const { state, dispatch } = useContext(StateContext);

  const setSearchQuery = (searchQuery: string) =>
    dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: searchQuery });

  const setCurrentPage = (currentPage: number) =>
    dispatch({ type: ActionTypes.SET_CURRENT_PAGE, payload: currentPage });

  const actions = {
    setSearchQuery,
    setCurrentPage,
  };

  return { state, actions };
};

export default useStateContext;
