import React, { useState } from 'react';
import { ProductCard, Tag, Button, Checkbox, PullRefresh, List, Cell, ConfigProvider, SubmitBar } from 'react-vant';
import { ListInstance } from 'react-vant';
import style from './cart.module.scss';
import { Arrow } from '@react-vant/icons'
import Section from './section'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const List = [{ sectionChecked: false, content: [{ name: '京东自营', checked: false }, { name: '淘宝', checked: false }, { name: '家电旗舰店', checked: false }, { name: '酒水饮料旗舰店', checked: false }] }, { sectionChecked: false, content: [{ name: '京东自营', checked: false }, { name: '淘宝', checked: false }, { name: '家电旗舰店', checked: false }, { name: '酒水饮料旗舰店', checked: false }] }];
  const [cartChecked, setCartChecked] = useState(false);
  const [sectionList, setSectionList] = useState(List);

  //总选择
  const cartCheck = (val) => {
    // sectionList.map(item => item.sectionChecked = val);
    sectionList.map(item => {
      item.content.map(item => item.checked = val)
      item.sectionChecked = val;
      return item;
    });
    setCartChecked(val);
    setSectionList([...sectionList]);
  }

  //每个section选择在父组件代理方法
  const handleCart = (val, index, cartList) => {
    sectionList[index].sectionChecked = val;
    sectionList[index].content = cartList;
    setCartChecked(val);

    if (val) {
      const partChosen = sectionList.some(item => !item.sectionChecked);
      partChosen ? setCartChecked(false) : setCartChecked(true);

    } else {
      setCartChecked(false);

    }
    setSectionList([...sectionList]);
  }
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
          sectionList.map((sectionGroup, index) =>
            <Section sectionGroup={sectionGroup} sectionIndex={index} handleCart={handleCart} />
          )
        }
        <div className={style.footer}>
          <SubmitBar
            price="3050"
            buttonText="去结算"
          >
            <Checkbox onChange={cartCheck} checked={cartChecked} checkedColor="#ee0a24">全选</Checkbox>
          </SubmitBar>
        </div>

      </div>
    </div>
  );
};