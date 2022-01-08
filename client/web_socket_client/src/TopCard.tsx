import React from "react";
import { Input } from 'antd';
import styles from './style.module.less';

export const TopCard = () => {

  return (
    <header className={styles['topCard']}>
      <div className={styles['searchContainer']}>
        <Input />
      </div>
      <div className={styles['opButtons']}>

      </div>
    </header>
  )
}
