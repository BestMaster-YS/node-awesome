import {atom} from 'recoil';
import {Message, MessageResponseData} from "../../common/message";

export const serverMessageListAtom = atom<Message<MessageResponseData>[]>({
  key: 'chat-message-list',
  default: [],
})
