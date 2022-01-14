import {useEffect, useRef, useState} from "react"
import {message} from 'antd';

export enum Status {
  opened,
  connecting,
  failed,
  disconnected
}

export type WSStatus = {
  state: Status;
  id: string;
}

export const useChatWS = () => {
  const chatWsRef = useRef<WebSocket>();
  const [ status, setStatus ] = useState<WSStatus>({ id: '', state: Status.disconnected });

  useEffect(() => {
    chatWsRef.current = new WebSocket('ws://127.0.0.1:3002');

    chatWsRef.current.onopen = function() {
      setStatus((status) => {
        status.state = Status.opened;
        return status;
      });
    }

    chatWsRef.current.onclose = function() {
      setStatus(status => {
        status.state = Status.disconnected;
        return status;
      });
    }

    chatWsRef.current.onerror = function() {
      message.error('ws error');
      setStatus(status => {
        status.state = Status.failed;
        return status;
      });
    }
  }, []);


  return {
    wsInstance: chatWsRef.current,
    status
  }
}


