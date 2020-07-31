import { GlobalState, ChatState } from '../types';

import {
  ADD_CHAT
} from '../actions/types';

const globalReducer = {
  [ADD_CHAT]: (state: GlobalState, {name}) => {
    if( name === undefined || name in state.chats){
      return state
    }
    else {
      return { ...state, chats: 
        {...state.chats, [name]: 
          {
            name: name,
            behavior: {
              showChat: false,
              disabledInput: false,
              messageLoader: false
            },
            preview: {
              src: '',
              alt: '',
              width: 0,
              height: 0,
              visible: false
            },
            messages: {
              messages: [],
              badgeCount: 0
            },
            quickButtons: {
              quickButtons: []
            }
          } 
        }
      }
    }
  },
};

export default globalReducer;