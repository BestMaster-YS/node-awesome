import {ChatUser} from "../recoil/atom/chatUserListAtom";

export type Process =
  | 'chat'
  | 'group';

export type MessageType =
  | 'client'
  | 'server'
  ;

export type Message<T = MessageResponseData | MessageRequestData> = {
  data: T;
  process: Process;
  time: number;
  type: MessageType;
}


export interface MessageResponseData {
  user: ChatUser;
  content: string;
}

export interface MessageRequestData {
  userId?: string;
  content: string;
}
