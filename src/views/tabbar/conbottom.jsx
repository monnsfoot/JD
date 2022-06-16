import { Tabbar } from 'react-vant';
import { WapHomeO, CartO, UserO, QrInvalid, FireO } from '@react-vant/icons';
import { withRouter } from 'react-router-dom';
import React from 'react'

const Conbottom = (props) => {

  const tabSelect = (v) => {
    switch (v) {
      case 0:
        props.history.push('/home')
        break;

      case 3:
        props.history.push('/cart')
        break;
      case 4:
        props.history.push('/user')
        break;

      default:
        break;
    }
  }
  return (
    <Tabbar activeColor="#f44336" inactiveColor="#000" onChange={tabSelect}>
      <Tabbar.Item icon={<WapHomeO />}>首页</Tabbar.Item>
      <Tabbar.Item icon={<QrInvalid />}>新品</Tabbar.Item>
      <Tabbar.Item icon={<FireO />}>逛</Tabbar.Item>
      <Tabbar.Item badge={{ content: 20 }} icon={<CartO />}>购物车</Tabbar.Item>
      <Tabbar.Item icon={<UserO />}>我的</Tabbar.Item>
    </Tabbar>

  );
}

export default withRouter(Conbottom);
