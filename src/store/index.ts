import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { checkAuthReject } from '@/store/actions/check-auth';
import reducer from '@/store/reducers';
import { State, Actions } from '@/store/reducers/types';
import Api from '@/api';

const onUnauthorized = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  store.dispatch(checkAuthReject());
};

const api = new Api(onUnauthorized);

const store = createStore<State, Actions, {}, {}>(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

export default store;
