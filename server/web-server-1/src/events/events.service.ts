import { Socket } from "socket.io";


export namespace Message {
  export interface MessageData {
    type: number;
    content: string | ArrayBuffer | Blob;
  }

  export type Process =
    | 'chat' // 普通
    | 'broadcast' // 
    | '';


}

export interface WebSocketInterface {

  onChat(client: Socket, message: string): void;

}

