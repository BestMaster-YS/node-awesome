import React from "react";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './style.module.less';

export const TopCard = () => {
  return (
    <header className={styles['topCard']}>
      <div className={styles['searchContainer']}>
        <Input
          className={styles['searchInput']}
          placeholder="Search"
          prefix={<SearchOutlined className={styles['searchIcon']} />}
        />
      </div>
      <div className={styles['opButtons']}>
        <Button>
          CLEAR CHAT
        </Button>
        <Button>MORE</Button>
      </div>
    </header>
  )
}
