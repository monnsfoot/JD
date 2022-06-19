import React, { useState, useEffect } from 'react';
import { Checkbox } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import style from './section.module.scss';
import CellJD from './cell/cell.js';
const Section = (props) => {
    const [sectionChecked, setSectionChecked] = useState(props.sectionGroup.sectionChecked);
    const [cartList, setCartList] = useState(props.sectionGroup.content);

    useEffect(() => {
        setSectionChecked(props.sectionGroup.sectionChecked);
    }, [props.sectionGroup.sectionChecked])

    const checkSection = (val) => {
        setSectionChecked(val);
        cartList.map(item => item.checked = val);
        props.handleCart(val, props.sectionIndex, cartList);
        setCartList([...cartList]);
        console.log('cartList-checkSection', cartList);
    }
    const handleSection = (val, index) => {
        cartList[index].checked = val;
        let checkedTemp = val
        if (val) {
            const partChosen = cartList.some(item => !item.checked);
            console.log('partChosen', partChosen);
            partChosen ? setSectionChecked(false) : setSectionChecked(true);
            checkedTemp = !partChosen;
        } else {
            checkedTemp = false
            setSectionChecked(false);
        }
        setCartList([...cartList]);
        props.handleCart(checkedTemp, props.sectionIndex, cartList);
        console.log('cartList-handleSection', cartList);

    }


    return (
        <div className={style.section}>
            <Checkbox onChange={checkSection} checked={sectionChecked} checkedColor="#ee0a24">
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
                    cartList.map((item, index) =>
                        <CellJD item={item} index={index} handleSection={handleSection} />
                    )
                }
            </div>

        </div>


    );

};
export default Section;