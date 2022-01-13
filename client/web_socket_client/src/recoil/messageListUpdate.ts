import { useEffect, useRef } from "react"
import { useSetRecoilState } from "recoil";
import { messageListAtom } from "./atom/messageListAtom";


export const useWSMessageListUpdate = (wsInstance: WebSocket | undefined) => {
  const setMessageList = useSetRecoilState(messageListAtom);
  const initRef = useRef(false);

  useEffect(() => {
    if (wsInstance && !initRef.current) {
      initRef.current = true;
      wsInstance.onmessage = function (data){
        if (data.data) {
          setMessageList(list => {
            list.push(data.data);
            return list;
          })
        }
      };  
    }
  }, [ wsInstance ]);
}


