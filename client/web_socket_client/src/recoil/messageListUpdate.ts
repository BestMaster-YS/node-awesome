import { useEffect, useRef } from "react"
import { useSetRecoilState } from "recoil";
import {serverMessageListAtom} from "./atom/serverMessageListAtom";
import {Message, MessageResponseData} from "../common/message";


export const useWSServerMessageListUpdate = (wsInstance: WebSocket | undefined) => {
  const setMessageList = useSetRecoilState(serverMessageListAtom);
  const initRef = useRef(false);

  useEffect(() => {
    if (wsInstance && !initRef.current) {
      initRef.current = true;
      wsInstance.onmessage = function (data: MessageEvent<Message<MessageResponseData>>){
        if (data.data) {
          const { type } = data.data;
          setMessageList(list => {
            if (type === 'server') {
              list.push(data.data);
            }
            return list;
          })
        }
      };
    }
  }, [ wsInstance ]);
}


