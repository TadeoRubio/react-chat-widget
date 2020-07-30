// Type definitions for react-chat-widget v3.0.0
// Project: <https://github.com/Wolox/react-chat-widget>
// Definitions by: Martín Callegari <https://github.com/mcallegari10>

import { ElementType } from 'react';

declare const Widget: ElementType;

export function getFirstOrDefaultChat(): string;

export function addChat(name: string): void;

export function addUserMessage(text: string, name?: string): void;
export function addUserMessage(text: string, name: string, id: string): void;

export function addResponseMessage(text: string, name?: string): void;
export function addResponseMessage(text: string, name: string, id: string): void;

export function addLinkSnippet(link: { link: string, title: string, target?: string }): void;
export function addLinkSnippet(link: { link: string, title: string, target?: string }, id: string): void;

export function renderCustomComponent(component: ElementType, props: any): void;
export function renderCustomComponent(component: ElementType, props: any, showAvatar: boolean): void;
export function renderCustomComponent(component: ElementType, props: any, showAvatar: boolean, id: string): void;

export function toggleMsgLoader(name?: string): void;
export function toggleWidget(name?: string): void;
export function toggleInputDisabled(name?: string): void;
export function dropMessages(name?: string): void;
export function isWidgetOpened(name?: string): boolean;
export function setQuickButtons(buttons: Array<{ label: string, value: string | number }>, name?: string): void;

export function deleteMessages(count: number, name?: string): void;
export function deleteMessages(count: number, name: string, id: string): void;

export function markAllAsRead(name?: string): void;
export function setBadgeCount(count: number, name?: string): void;

export as namespace ReactChatWidget;
