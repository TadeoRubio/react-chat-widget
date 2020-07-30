import { ElementType } from 'react';

import { LinkParams, FullscreenPreviewState } from '../types';

export const TOGGLE_CHAT = 'BEHAVIOR/TOGGLE_CHAT';
export const TOGGLE_INPUT_DISABLED = 'BEHAVIOR/TOGGLE_INPUT_DISABLED';
export const TOGGLE_MESSAGE_LOADER = 'BEHAVIOR/TOGGLE_MSG_LOADER';
export const SET_BADGE_COUNT = 'BEHAVIOR/SET_BADGE_COUNT';
export const ADD_NEW_USER_MESSAGE = 'MESSAGES/ADD_NEW_USER_MESSAGE';
export const ADD_NEW_RESPONSE_MESSAGE = 'MESSAGES/ADD_NEW_RESPONSE_MESSAGE';
export const ADD_NEW_LINK_SNIPPET = 'MESSAGES/ADD_NEW_LINK_SNIPPET';
export const ADD_COMPONENT_MESSAGE = 'MESSAGES/ADD_COMPONENT_MESSAGE';
export const DROP_MESSAGES = 'MESSAGES/DROP_MESSAGES';
export const HIDE_AVATAR = 'MESSAGES/HIDE_AVATAR';
export const DELETE_MESSAGES = 'MESSAGES/DELETE_MESSAGES';
export const MARK_ALL_READ = 'MESSAGES/MARK_ALL_READ';
export const SET_QUICK_BUTTONS = 'SET_QUICK_BUTTONS';
export const OPEN_FULLSCREEN_PREVIEW = 'FULLSCREEN/OPEN_PREVIEW';
export const CLOSE_FULLSCREEN_PREVIEW = 'FULLSCREEN/CLOSE_PREVIEW';
export const ADD_CHAT = 'CHATS/ADD_CHAT';

export interface ToggleChat {
  type: typeof TOGGLE_CHAT;
  name: string
}

export interface ToggleInputDisabled {
  type: typeof TOGGLE_INPUT_DISABLED;
  name: string
}

export interface AddUserMessage {
  type: typeof ADD_NEW_USER_MESSAGE;
  text: string;
  name: string;
  id?: string;
}

export interface AddResponseMessage {
  type: typeof ADD_NEW_RESPONSE_MESSAGE;
  text: string;
  id?: string;
  name: string;
}

export interface ToggleMsgLoader {
  type: typeof TOGGLE_MESSAGE_LOADER;
  name: string;
}

export interface AddLinkSnippet {
  type: typeof ADD_NEW_LINK_SNIPPET;
  link: LinkParams;
  id?: string;
  name: string;
}

export interface RenderCustomComponent {
  type: typeof ADD_COMPONENT_MESSAGE;
  component: ElementType;
  props: any;
  showAvatar: boolean;
  id?: string;
  name: string;
}

export interface DropMessages {
  type: typeof DROP_MESSAGES;
  name: string;
}

export interface HideAvatar {
  type: typeof HIDE_AVATAR;
  index: number;
  name: string;
}

export interface DeleteMessages {
  type: typeof DELETE_MESSAGES;
  count: number;
  id?: string;
  name: string;
}

export interface SetQuickButtons {
  type: typeof SET_QUICK_BUTTONS;
  buttons: Array<{ label: string, value: string | number }>;
  name: string;
}

export interface SetBadgeCount {
  type: typeof SET_BADGE_COUNT;
  count: number;
  name: string;
}

export interface MarkAllMessagesRead {
  type: typeof MARK_ALL_READ;
  name: string;
}

export type BehaviorActions = ToggleChat | ToggleInputDisabled | ToggleMsgLoader;

export type MessagesActions = AddUserMessage | AddResponseMessage | AddLinkSnippet | RenderCustomComponent
                              | DropMessages | HideAvatar | DeleteMessages | MarkAllMessagesRead | SetBadgeCount;

export type QuickButtonsActions = SetQuickButtons;

export interface openFullscreenPreview {
  type: typeof OPEN_FULLSCREEN_PREVIEW;
  payload: FullscreenPreviewState;
  name: string;
}

export interface closeFullscreenPreview {
  type: typeof CLOSE_FULLSCREEN_PREVIEW;
  name: string;
}

export type FullscreenPreviewActions = openFullscreenPreview | closeFullscreenPreview;

export interface AddChat{
  type: typeof ADD_CHAT;
  name: string;
}

export type GlobalActions =  QuickButtonsActions | FullscreenPreviewActions | MessagesActions | BehaviorActions | AddChat;