import React, { useState, useEffect } from 'react';
import { ProductCard, Tag, Button, Checkbox, PullRefresh, List, Cell, ConfigProvider, SubmitBar } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import style from './section.module.scss';
import CellJD from './cell/cell.js';
const Section = (props) => {
    const cartList = [['京东自营', '淘宝', '家电旗舰店', '酒水饮料旗舰店'], ['京东自营', '淘宝', '家电旗舰店', '酒水饮料旗舰店']];
    const [sectionChecked, setSectionChecked] = useState(props.cartChecked);

    useEffect(() => {
        setSectionChecked(props.cartChecked);
    }, [props.cartChecked]);

    const checkSection = (val) => {
        setSectionChecked(val);
    }
    return (
        <div className={style.section}>
            <Checkbox  onChange={checkSection} checked={sectionChecked} checkedColor="#ee0a24">
                <div className={style.sectionHeader}>
                    <div>
                        JD 乐智由我京东自营旗舰店<Arrow fontSize={'14px'} />
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
                        <CellJD cellChecked={sectionChecked} />
                    )
                }
            </div>

        </div>


    );

};
export default Section;