import React, { useState } from 'react';
import { Checkbox,  SubmitBar } from 'react-vant';
import style from './cart.module.scss';
import { Arrow } from '@react-vant/icons'
import Section from './section'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const List = [
    { 
      sectionChecked: false,
      sectionPrice: 0,
      content: [
        { 
          sumPrice: 0,
          price: 100,
          name: '京东自营', 
          checked: false
        }, 
        { 
          sumPrice: 0,
          price: 20,
          name: '淘宝', 
          checked: false 
        }, 
        { 
          sumPrice: 0,
          price: 10,
          name: '家电旗舰店', 
          checked: false 
        }, 
        { 
          sumPrice: 0,
          price: 50,
          name: '酒水饮料旗舰店', 
          checked: false 
        }
      ] 
    },
    { 
      sectionChecked: false,
      sectionPrice: 0,
      content: [
        { 
          sumPrice: 0,
          price: 1,
          name: '京东自营', 
          checked: false
        }, 
        { 
          sumPrice: 0,
          price: 2,
          name: '淘宝', 
          checked: false 
        }, 
        { 
          sumPrice: 0,
          price: 5,
          name: '家电旗舰店', 
          checked: false 
        }, 
        { 
          sumPrice: 0,
          price: 10.0,
          name: '酒水饮料旗舰店', 
          checked: false 
        }
      ] 
    },


  ];
  const [cartChecked, setCartChecked] = useState(false);
  const [sectionList, setSectionList] = useState(List);
  const [totalPrice, setTotalPrice] = useState(0);

  //总选择
  const cartCheck = (val) => {
    // sectionList.map(item => item.sectionChecked = val);
    sectionList.map(item => {
      item.content.map(item => item.checked = val)
      item.sectionChecked = val;
      return item;
    });
    const priceTemp = sectionList.reduce((total, item) => {
      return total + item.sectionPrice;
    }
    , 0);
    setTotalPrice(priceTemp);

    setCartChecked(val);
    setSectionList([...sectionList]);
  }

  //每个section选择在父组件代理方法
  const handleCart = (val, index, cartList, sectionPrice) => {
    sectionList[index].sectionChecked = val;
    sectionList[index].content = cartList;
    sectionList[index].sectionPrice = sectionPrice;

    setCartChecked(val);
    const priceTemp = sectionList.reduce((total, item) => {
      return total + item.sectionPrice;
    }
    , 0);
    setTotalPrice(priceTemp);

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
            <Section key={index} sectionGroup={sectionGroup} sectionIndex={index} handleCart={handleCart} />
          )
        }
        <div className={style.footer}>
          <SubmitBar
            price={totalPrice * 100}
            buttonText="去结算"
          >
            <Checkbox onChange={cartCheck} checked={cartChecked} checkedColor="#ee0a24">全选</Checkbox>
          </SubmitBar>
        </div>

      </div>
    </div>
  );
};