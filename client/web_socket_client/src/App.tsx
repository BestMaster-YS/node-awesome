import React, { useMemo, useState } from 'react'
import { Input, Button } from 'antd';
import style from './style.module.less';
import { ChatMessageWS } from './common/wx';
import { Status, useChatWS } from './hooks/useWS';
import classNames from 'classnames';
import { useMemoizedFn } from 'ahooks';

const { TextArea } = Input;

function App() {
  const { wsInstance, status } = useChatWS();
  const [content, onChange] = useState('');

  const isConnected = status.state === Status.opened;

  const handleChange = useMemoizedFn((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('change: ', e.target.value);
    onChange(e.target.value);
  });

  const handleSend = useMemoizedFn(() => {
    if (content) {
      const data = { content };
      wsInstance?.send(JSON.stringify(data));
    }
  })

  return (
    <div className={style['App-container']} >
      <section className={classNames(style['chat-message-container'], { [style['connected']]: isConnected })}>

      </section>
      <section className={style['chat-input-container']}>
        <TextArea
          onChange={(e) => onChange(e.target.value)}
        />
        <Button onClick={handleSend}>发送</Button>
      </section>
    </div>
  )
}

export default App
