import { GlobalState  } from '../types';

import {
  OPEN_FULLSCREEN_PREVIEW,
  CLOSE_FULLSCREEN_PREVIEW,
} from '../actions/types';

const prevw = {
  src: '',
  alt: '',
  width: 0,
  height: 0,
  visible: false
};

const fullscreenPreviewReducer = {
  [OPEN_FULLSCREEN_PREVIEW]: (state: GlobalState, { payload, name }) => {
    const { src, width, height } = payload
    return {
      ...state,
        chats:{
          ...state.chats, [name]:{
            ...state.chats[name], preview:{
              ...state.chats[name].preview, src, width, height, visible: true 
            }
          }
        }
     }
  },

  [CLOSE_FULLSCREEN_PREVIEW]: (state: GlobalState, {name}) => ({
    ...state,
      chats:{
        ...state.chats, [name]:{
          ...state.chats[name], preview: prevw
        }
      }
   }),

};

export default fullscreenPreviewReducer;