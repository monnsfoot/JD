import React, { useState } from 'react';
import { ProductCard, Tag, Button, Checkbox, PullRefresh, List, Cell, ConfigProvider, SubmitBar } from 'react-vant';
import { ListInstance } from 'react-vant';
import style from './cart.module.scss';
import { Arrow } from '@react-vant/icons'
import  Section  from './section'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [productNumber, setProductNumber] = useState(1);
  const increase = (index) => {
    setProductNumber(productNumber + 1);
  }
  const decrease = (index) => {

    productNumber > 0 && setProductNumber(productNumber - 1);
  }

  const sectionList = [['京东自营', '淘宝', '家电旗舰店', '酒水饮料旗舰店'], ['京东自营', '淘宝', '家电旗舰店', '酒水饮料旗舰店']];

  return (
    // eslint-disable-next-line array-callback-return

    <div>
    <div className={style.content}>
      <div className={style.header}>
        <div>
          全部54
        </div>
        <div>
          降价23
        </div>
        <div>
          筛选<Arrow fontSize={'8px'} />
        </div>
      </div>
      {
        sectionList.map(cartList =>
          <Section cartList={cartList} />
        )
      }
          <div className={style.footer}>
      <SubmitBar
          price="3050"
          buttonText="去结算"
        >
          <Checkbox>全选</Checkbox>
      </SubmitBar>
      </div>

    </div>
    </div>
  );
};