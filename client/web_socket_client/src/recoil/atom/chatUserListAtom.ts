import { atom } from 'recoil';

export interface ChatUser {
  id: string;
  avatar: string;
  name: string;
  latestChatTime: number;
  latestChatContent: any;
  unreadCount: number; 
}

export const chatUserListAtom = atom<ChatUser[]>({
  key: 'chat-user-list',
  default: [],
})
