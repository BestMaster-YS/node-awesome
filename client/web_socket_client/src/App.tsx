import React, { useState } from 'react'
import { Input, Button } from 'antd';
import style from './style.module.less';
import { Status, useChatWS } from './hooks/useWS';
import classNames from 'classnames';
import { useMemoizedFn } from 'ahooks';
import { TopCard } from './TopCard';
import { useWSServerMessageListUpdate } from './recoil/messageListUpdate';
import {Message} from "./common/message";
import Cookie from 'js-cookie';

const { TextArea } = Input;

function App() {
  const { wsInstance, status } = useChatWS();
  const [content, onChange] = useState('');

  const isConnected = status.state === Status.opened;

  useWSServerMessageListUpdate(wsInstance);

  const handleChange = useMemoizedFn((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  });

  const handleSend = useMemoizedFn(() => {
    if (content) {
      const message: Message = {
        type: 'client',
        process: 'chat',
        data: {
          content,
          userId: Cookie.get('chat_user_id'),
        },
        time: Date.now(),
      }
      const data = { content, event: 'hello' };
      wsInstance?.send(JSON.stringify(data));
    }
  })

  return (
    <div className={style['App-container']} >
      <TopCard />
      <section className={classNames(style['chat-message-container'], { [style['connected']]: isConnected })}>

      </section>
      <section className={style['chat-input-container']}>
        <TextArea
          onChange={handleChange}
        />
        <Button onClick={handleSend}>发送</Button>
      </section>
    </div>
  )
}

export default App
