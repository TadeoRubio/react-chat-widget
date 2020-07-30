import { ElementType } from 'react';

import store from '.';
import * as actions from './actions';
import { LinkParams, ImageState } from './types';
import { DEFAULT_CHAT_NAME } from '../constants'

export function addUserMessage(text: string, name: string = getFirstOrDefaultChat(), id?: string) {
  store.dispatch(actions.addUserMessage(text, name, id));
}

export function addResponseMessage(text: string, name: string = getFirstOrDefaultChat(), id?: string) {
  store.dispatch(actions.addResponseMessage(text, name, id));
}

export function addLinkSnippet(link: LinkParams, name: string = getFirstOrDefaultChat(), id?: string) {
  store.dispatch(actions.addLinkSnippet(link, name, id));
}

export function toggleMsgLoader(name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.toggleMsgLoader(name));
}

export function renderCustomComponent(component: ElementType, props: any, showAvatar = false, name: string = getFirstOrDefaultChat(), id?: string) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar, name, id));
}

export function toggleWidget(name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.toggleChat(name));
}

export function toggleInputDisabled(name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.toggleInputDisabled(name));
}

export function dropMessages(name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.dropMessages(name));
}

export function isWidgetOpened(name: string = getFirstOrDefaultChat()): boolean {
  return store.getState().chats[name].behavior.showChat;
}

export function setQuickButtons(buttons: Array<{ label: string, value: string | number }>, name :string = getFirstOrDefaultChat()) {
  store.dispatch(actions.setQuickButtons(buttons,name));
}

export function deleteMessages(count: number, name: string = getFirstOrDefaultChat(), id?: string) {
  store.dispatch(actions.deleteMessages(count, name, id));
}

export function markAllAsRead(name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.markAllMessagesRead(name));
}

export function setBadgeCount(count: number, name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.setBadgeCount(count, name));
}

export function openFullscreenPreview(payload: ImageState, name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.openFullscreenPreview(payload, name));
}

export function closeFullscreenPreview(name: string = getFirstOrDefaultChat()) {
  store.dispatch(actions.closeFullscreenPreview(name));
}

export function addChat(name: string = getFirstOrDefaultChat()){
  store.dispatch(actions.addChat(name));
}

export function getFirstOrDefaultChat(){
  let chat: string = undefined!
  for(let key in store.getState().chats){
    if(chat === undefined || key == DEFAULT_CHAT_NAME){
      chat = key
    }
  }
  return chat;
}