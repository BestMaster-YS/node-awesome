import { atom } from 'recoil';
import { ChatUser } from './chatUserListAtom';

export interface MessageList {
  user: ChatUser;
  time: number;
  content: string;
}

export const messageListAtom = atom<MessageList[]>({
  key: 'chat-message-list',
  default: [],
})
