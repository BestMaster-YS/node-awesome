export type Process =
  | 'chat'
  | 'group';

export type MessageType =
  | 'client'
  | 'server'
  ;

export type Message<T = Record<string, any>> = {
  data: T;
  process: Process;
  time: number;
  type: MessageType;
}


