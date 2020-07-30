import { GlobalState } from '../types';
import { createNewMessage, createLinkSnippet, createComponentMessage } from '../../utils/messages';
import { MESSAGE_SENDER } from '../../constants';
import {
  ADD_NEW_USER_MESSAGE,
  ADD_NEW_RESPONSE_MESSAGE,
  ADD_NEW_LINK_SNIPPET,
  ADD_COMPONENT_MESSAGE,
  DROP_MESSAGES,
  HIDE_AVATAR,
  DELETE_MESSAGES,
  MARK_ALL_READ,
  SET_BADGE_COUNT,
} from '../actions/types';

const messagesReducer = {
  [ADD_NEW_USER_MESSAGE]: (state: GlobalState, { text, name, id }) =>
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, messages: [...state.chats[name].messages.messages, createNewMessage(text, MESSAGE_SENDER.CLIENT, id)]
          }
        }
      }
    }),

  [ADD_NEW_RESPONSE_MESSAGE]: (state: GlobalState, { text, id, name}) => 
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              messages: [...state.chats[name].messages.messages, createNewMessage(text, MESSAGE_SENDER.RESPONSE, id)],
              badgeCount: state.chats[name].messages.badgeCount + 1
          }
        }
      }
    }),

  [ADD_NEW_LINK_SNIPPET]: (state: GlobalState, { link, id, name }) =>
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              messages: [...state.chats[name].messages.messages, createLinkSnippet(link, id)]
          }
        }
      }
    }),

  [ADD_COMPONENT_MESSAGE]: (state: GlobalState, { component, props, showAvatar, id, name }) =>
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              messages: [...state.chats[name].messages.messages, createComponentMessage(component, props, showAvatar, id)] 
          }
        }
      }
    }),

  [DROP_MESSAGES]: (state: GlobalState, { name }) => 
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              messages: [] 
          }
        }
      }
    }),

  [HIDE_AVATAR]: (state: GlobalState, { index, name }) => state.chats[name].messages.messages[index].showAvatar = false,

  [DELETE_MESSAGES]: (state: GlobalState, { count, id, name }) =>
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              messages: id ?
                state.chats[name].messages.messages.filter(message => message.customId !== id) :
                state.chats[name].messages.messages.splice(state.chats[name].messages.messages.length - 1, count) 
          }
        }
      }
    }),

  [SET_BADGE_COUNT]: (state: GlobalState, { count, name }) => 
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              badgeCount: count 
          }
        }
      }
    }),

  [MARK_ALL_READ]: (state: GlobalState , { name }) =>
    ({
      ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], messages:{
            ...state.chats[name].messages, 
              messages: state.chats[name].messages.messages.map(message => ({ ...message, unread: false})),
              badgeCount: 0 
          }
        }
      }
    })
}
export default messagesReducer;