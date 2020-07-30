import { GlobalState } from '../types';

import {
  TOGGLE_CHAT,
  TOGGLE_INPUT_DISABLED,
  TOGGLE_MESSAGE_LOADER
} from '../actions/types';


const behaviorReducer = {
  [TOGGLE_CHAT]: (state: GlobalState, {name}) => ({
      ...state,
        chats:{
          ...state.chats, [name]:{
            ...state.chats[name], behavior:{
              ...state.chats[name].behavior, showChat: !state.chats[name].behavior.showChat
            }
          }
        }
     }
  ),

  [TOGGLE_INPUT_DISABLED]: (state: GlobalState, {name}) => ({
      ...state,
        chats:{
          ...state.chats, [name]:{
            ...state.chats[name], behavior:{
              ...state.chats[name].behavior, disabledInput: !state.chats[name].behavior.disabledInput
            }
          }
        }
     }
  ),

  [TOGGLE_MESSAGE_LOADER]: (state: GlobalState, {name}) => ({
      ...state,
        chats:{
          ...state.chats, [name]:{
            ...state.chats[name], behavior:{
              ...state.chats[name].behavior, messageLoader: !state.chats[name].behavior.messageLoader
            }
          }
        }
     }
  )
};

export default behaviorReducer;
