import { createStore, compose } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import quickButtons from './reducers/quickButtonsReducer';
import preview from './reducers/fullscreenPreviewReducer';
import global from './reducers/globalReducer';

import { createReducer } from '../utils/createReducer';
import { GlobalState } from './types';
import { GlobalActions } from './actions/types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const allReducers = Object.assign({}, behavior, messages, preview, quickButtons, global);
const initialState: GlobalState =  { chats: {} };

const composeEnhancers =   (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducer = (state: GlobalState = initialState, action: GlobalActions) => createReducer(allReducers, state, action);

export default createStore(reducer, composeEnhancers());
