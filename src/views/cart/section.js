import React, { useState, useEffect } from 'react';
import { Checkbox } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import style from './section.module.scss';
import CellJD from './cell/cell.js';
const Section = (props) => {
    let idArray = [];
    const [sectionChecked, setSectionChecked] = useState(props.sectionGroup.sectionChecked);
    const [cartList, setCartList] = useState(props.sectionGroup.content);

    useEffect(() => {
        setSectionChecked(props.sectionGroup.sectionChecked);
    }, [props.sectionGroup.sectionChecked])
    useEffect(() => {
        setCartList(props.sectionGroup.content);
    }, [props.sectionGroup.content])

    const checkSection = (val) => {
        setSectionChecked(val);
        cartList.map(item => item.checked = val);
        setCartList([...cartList]);
        const sectionPrice = cartList.reduce((total, item) => {
            if (item.checked) {
                return total + item.sumPrice;
            } else {
                return total + 0;
            }
        }, 0);
        props.handleCart(val, props.sectionIndex, cartList, sectionPrice, secctionCheckedNumFn([...cartList]), idArray);
    }
    const handleSection = (val, index, sumPrice, productNumber) => {
        cartList[index].checked = val;
        cartList[index].sumPrice = sumPrice;
        cartList[index].checkedNum = productNumber;

        idArray = [];
        const sectionPrice = cartList.reduce((total, item) => {
            if (item.checked) {
                idArray.push(item.productId);
                return total + item.sumPrice;
            } else {
                return total + 0;
            }
        }, 0);


        let checkedTemp = val
        if (val) {
            const partChosen = cartList.some(item => !item.checked);
            partChosen ? setSectionChecked(false) : setSectionChecked(true);
            checkedTemp = !partChosen;
        } else {
            checkedTemp = false
            setSectionChecked(false);
        }
        setCartList(
            cartList => {
                props.handleCart(checkedTemp, props.sectionIndex, cartList, sectionPrice, secctionCheckedNumFn([...cartList]), idArray);
                return [...cartList]
            }
        );
    }

    const secctionCheckedNumFn = (list) => {

        const sectionCheckedNum = list.reduce((total, item) => {
            if (item.checked) {
                return total + item.checkedNum;
            } else {
                return total + 0;
            }
        }, 0);
        return sectionCheckedNum;
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
                        <CellJD key={index} item={item} index={index} handleSection={handleSection} />
                    )
                }
            </div>

        </div>


    );

};
export default Section;