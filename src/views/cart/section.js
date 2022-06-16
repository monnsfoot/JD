import React, { useState } from 'react';
import { ProductCard, Tag, Button, Checkbox, PullRefresh, List, Cell, ConfigProvider, SubmitBar } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import style from './section.module.scss';
import CellJD from './cell/cell.js';
const Section = (props) => {
    const cartList = [['京东自营', '淘宝', '家电旗舰店', '酒水饮料旗舰店'], ['京东自营', '淘宝', '家电旗舰店', '酒水饮料旗舰店']];
    const [productNumber, setProductNumber] = useState(1);
    const increase = (index) => {
      setProductNumber(productNumber + 1);
    }
    const decrease = (index) => {
  
      productNumber > 0 && setProductNumber(productNumber - 1);
    }
    return (
        <div className={style.section}>
            <Checkbox defaultChecked checkedColor="#ee0a24">
                <div className={style.sectionHeader}>
                    <div>
                        JD 乐智由我京东自营旗舰店ss<Arrow fontSize={'14px'} />
                    </div>
                    <span>
                        优惠券
                    </span>
                </div>
            </Checkbox>
            <div>
                {
                    // eslint-disable-next-line array-callback-return
                    cartList.map(item =>
                        <CellJD cartList={item} increase={increase} decrease={decrease} productNumber={productNumber} />

                    )
                }
            </div>

        </div>


    );

};
export default Section;