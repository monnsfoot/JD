import React, { useState } from 'react';
import { Checkbox,  SubmitBar } from 'react-vant';
import style from './cart.module.scss';
import { Arrow } from '@react-vant/icons'
import Section from './section'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const List = [
    { 
      sectionTitle: '京东物流',
      sectionChecked: false,
      checkedNum: 0,
      sectionPrice: 0,
      content: [
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/201197/9/22642/481582/62acb7e0E66f1a652/ee318fd7a686c2ff.jpg",
            name:"安踏 时尚运动鞋男2022夏季情侣同款低帮网面透气厚底跑步老爹休闲鞋 浅米白/亚麻灰-4 7.5(男40.5)",
            num:1,
            price:20900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/177655/39/22669/179461/62552c93E890de5f1/3e270dcfd38b4f28.jpg",
            name:"小米 Redmi AX3000 路由器 5G双频WIFI6 新一代高通芯片 3000M无线速率 160MHz高宽频 游戏专属加速",
            num:1,
            price:23300,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/85493/2/29571/324040/62adfae4E69e39859/61f2dcc593b0e341.jpg",
            name:"容声（Ronshen）波轮洗衣机全自动10公斤家用大容量 10大洗衣程序 节能低噪 健康桶自洁 RB100D1526 以旧换新",
            num:1,
            price:81900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false

        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/192953/35/25009/106408/62adf505Ef1fd90a5/9fe1fe590607985b.jpg",
            name:"米家 小米电烤箱家用 三层烤位 上下独立控温 一机多用 70°C-230°C精准控温 内置烤叉32L",
            num:1,
            price:29900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/58367/30/16607/179461/61359238Eda34c372/04ab06764ceacc30.jpg",
            name:"小米 Redmi AX3000 路由器 5G双频WIFI6 新一代高通芯片 3000M无线速率 160MHz高宽频 游戏专属加速 非模块化",
            num:1,
            price:23900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/55975/17/19449/141834/62ad45c8E5e5b3b81/c9c5aaf9f8d9b2c3.jpg",
            name:"小米 27英寸 4K超清 IPS技术 99% Adobe RGB HDR400 Type-C 90W反向充电 升降旋转支架 电脑办公显示器",
            num:1,
            price:259900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/206907/5/23751/117584/62ad7d0dE5ffd947e/94fec06a1c05478e.jpg",
            name:"小米 RedmiBookPro 14英寸 2.5K高色域视网膜屏 轻薄笔记本电脑(6核R5 16G 512G-SSD 指纹识别 DC调光)",
            num:1,
            price:379900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        }
    ]
    },
    { 
      sectionTitle: '京东物流',
      sectionChecked: false,
      checkedNum: 0,
      sectionPrice: 0,
      content: [
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/201197/9/22642/481582/62acb7e0E66f1a652/ee318fd7a686c2ff.jpg",
            name:"安踏 时尚运动鞋男2022夏季情侣同款低帮网面透气厚底跑步老爹休闲鞋 浅米白/亚麻灰-4 7.5(男40.5)",
            num:1,
            price:20900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/177655/39/22669/179461/62552c93E890de5f1/3e270dcfd38b4f28.jpg",
            name:"小米 Redmi AX3000 路由器 5G双频WIFI6 新一代高通芯片 3000M无线速率 160MHz高宽频 游戏专属加速",
            num:1,
            price:23300,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/85493/2/29571/324040/62adfae4E69e39859/61f2dcc593b0e341.jpg",
            name:"容声（Ronshen）波轮洗衣机全自动10公斤家用大容量 10大洗衣程序 节能低噪 健康桶自洁 RB100D1526 以旧换新",
            num:1,
            price:81900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false

        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/192953/35/25009/106408/62adf505Ef1fd90a5/9fe1fe590607985b.jpg",
            name:"米家 小米电烤箱家用 三层烤位 上下独立控温 一机多用 70°C-230°C精准控温 内置烤叉32L",
            num:1,
            price:29900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/58367/30/16607/179461/61359238Eda34c372/04ab06764ceacc30.jpg",
            name:"小米 Redmi AX3000 路由器 5G双频WIFI6 新一代高通芯片 3000M无线速率 160MHz高宽频 游戏专属加速 非模块化",
            num:1,
            price:23900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/55975/17/19449/141834/62ad45c8E5e5b3b81/c9c5aaf9f8d9b2c3.jpg",
            name:"小米 27英寸 4K超清 IPS技术 99% Adobe RGB HDR400 Type-C 90W反向充电 升降旋转支架 电脑办公显示器",
            num:1,
            price:259900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
            checked: false
        },
        {
            imgUrl:"http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/206907/5/23751/117584/62ad7d0dE5ffd947e/94fec06a1c05478e.jpg",
            name:"小米 RedmiBookPro 14英寸 2.5K高色域视网膜屏 轻薄笔记本电脑(6核R5 16G 512G-SSD 指纹识别 DC调光)",
            num:1,
            price:379900,
            plusPrice:1,
            plusPriceStatus:false,
            sumPrice: 0,
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
  const goToPay = () => {
    console.log("去支付");
    const data = {totalPrice: totalPrice, sectionList: sectionList};
    console.log('去支付',data);
    props.history.push({pathname:'/orderedit', query:data});
  }

  //每个section选择在父组件代理方法
  const handleCart = (val, index, cartList, sectionPrice, sectionCheckedNum) => {
    sectionList[index].sectionChecked = val;
    sectionList[index].content = cartList;
    sectionList[index].sectionPrice = sectionPrice;
    sectionList[index].checkedNum = sectionCheckedNum;


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
    console.log('setSectionListCART.JS', sectionList);
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
            price={totalPrice}
            buttonText="去结算"
            onSubmit={goToPay}
          >
            <Checkbox onChange={cartCheck} checked={cartChecked} checkedColor="#ee0a24">全选</Checkbox>
          </SubmitBar>
        </div>

      </div>
    </div>
  );
};