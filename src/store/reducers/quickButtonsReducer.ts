import { createQuickButton } from '../../utils/messages';
import { SET_QUICK_BUTTONS } from '../actions/types';
import { QuickButton, GlobalState } from '../types'

const quickButtonsReducer = {
  [SET_QUICK_BUTTONS]: (state: GlobalState, { buttons, name }) =>
  ({
   ...state,
     chats:{
       ...state.chats, [name]:{
         ...state.chats[name], quickButtons: {
           ...state.chats[name].quickButtons, quickButtons: [...buttons.map((button: QuickButton) => createQuickButton(button))]
         } 
       }
     }
  })

}

export default quickButtonsReducer;