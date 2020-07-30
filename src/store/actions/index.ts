import { ElementType } from 'react';

import * as actionsTypes from './types';
import { LinkParams, ImageState } from '../types';

export function toggleChat(name: string): actionsTypes.ToggleChat {
  return {
    type: actionsTypes.TOGGLE_CHAT,
    name
  };
}

export function toggleInputDisabled(name: string): actionsTypes.ToggleInputDisabled {
  return {
    type: actionsTypes.TOGGLE_INPUT_DISABLED,
    name
  };
}

export function addUserMessage(text: string, name: string, id?: string): actionsTypes.AddUserMessage {
  return {
    type: actionsTypes.ADD_NEW_USER_MESSAGE,
    text,
    name,
    id
  };
}

export function addResponseMessage(text: string, name: string, id?: string): actionsTypes.AddResponseMessage {
  return {
    type: actionsTypes.ADD_NEW_RESPONSE_MESSAGE,
    text,
    id,
    name
  };
}

export function toggleMsgLoader(name: string): actionsTypes.ToggleMsgLoader {
  return {
    type: actionsTypes.TOGGLE_MESSAGE_LOADER,
    name
  }
}

export function addLinkSnippet(link: LinkParams, name: string, id?: string): actionsTypes.AddLinkSnippet {
  return {
    type: actionsTypes.ADD_NEW_LINK_SNIPPET,
    link,
    id,
    name
  };
}

export function renderCustomComponent(
  component: ElementType,
  props: any,
  showAvatar: boolean,
  name: string,
  id?: string
): actionsTypes.RenderCustomComponent {
  return {
    type: actionsTypes.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar,
    id,
    name
  };
}

export function dropMessages(name: string): actionsTypes.DropMessages {
  return {
    type: actionsTypes.DROP_MESSAGES,
    name
  };
}

export function hideAvatar(index: number,name: string): actionsTypes.HideAvatar {
  return {
    type: actionsTypes.HIDE_AVATAR,
    index,
    name
  };
}

export function setQuickButtons(buttons: Array<{ label: string, value: string | number }>, name: string ): actionsTypes.SetQuickButtons {
  return {
    type: actionsTypes.SET_QUICK_BUTTONS,
    buttons,
    name
  }
}

export function deleteMessages(count: number, name: string, id?: string): actionsTypes.DeleteMessages {
  return {
    type: actionsTypes.DELETE_MESSAGES,
    count,
    id,
    name
  }
}

export function setBadgeCount(count: number,name: string): actionsTypes.SetBadgeCount {
  return {
    type: actionsTypes.SET_BADGE_COUNT,
    count,
    name
  }
}

export function markAllMessagesRead(name: string): actionsTypes.MarkAllMessagesRead {
  return {
    type: actionsTypes.MARK_ALL_READ,
    name
  }
}

export function openFullscreenPreview(payload: ImageState, name: string): actionsTypes.FullscreenPreviewActions {
  return {
    type: actionsTypes.OPEN_FULLSCREEN_PREVIEW,
    payload,
    name
  };
}

export function closeFullscreenPreview(name: string): actionsTypes.FullscreenPreviewActions {
  return {
    type: actionsTypes.CLOSE_FULLSCREEN_PREVIEW,
    name
  };
}

export function addChat(name:string): actionsTypes.GlobalActions {
  return{
    type: actionsTypes.ADD_CHAT,
    name
  };
}
