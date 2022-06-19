import React, { useState, useEffect } from 'react';
import { ProductCard, Tag, Checkbox } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import style from './cell.module.scss';

const CellJD = (props) => {

    const [productNumber, setProductNumber] = useState(1);
    const [productChecked, setProductChecked] = useState(props.item.checked);
    useEffect(() => {
        const sumPrice = props.item.checked ? props.item.price * productNumber : 0;
        props.handleSection( props.item.checked, props.index, sumPrice);
    }, [ props.item.checked]);
    const increase = (e) => {
        e.stopPropagation();
        const sumPrice = productChecked ? props.item.price * (productNumber + 1) : 0;
        props.handleSection(productChecked, props.index, sumPrice);

        setProductNumber(productNumber + 1);

    }
    const decrease = (e) => {
        e.stopPropagation();
        const sumPrice = productChecked ? props.item.price * (productNumber - 1) : 0;
        props.handleSection(productChecked, props.index, sumPrice);

        productNumber > 0 && setProductNumber(productNumber - 1);

    }
    const inputClick = (e) => {
        e.stopPropagation();

    }
    const cellCheck = (val) => {
        // val ? props.handleSection(val) : props.handleSection(false);
        setProductChecked(val);
        const sumPrice = val ? props.item.price * productNumber : 0;
        console.log('sumPrice', sumPrice, 'productNumber', productNumber);
        props.handleSection(val, props.index, sumPrice);
    }
    const inputChange = (e) => {
        e.stopPropagation();

    }
    return (
        <div className={style.item}>
            <div className={style.itemTitle}>
                <div className={style.leftItemTitle}>
                    满188元，可减60元，还差90元
                </div>
                <div className={style.rightItemTitle}>
                    去凑单<Arrow fontSize={'8px'} />
                </div>

            </div>
            <Checkbox checked={props.item.checked} onChange={cellCheck} checkedColor="#ee0a24">
                <ProductCard
                    price={props.item.price}
                    desc="台式1600倍（可选组合套装），儿童显微镜"
                    title="乐智由我 儿童显微镜玩具高清双光源1600倍小学生生日礼物男孩女孩8-10岁以上科学实验放大镜"
                    thumb="//img10.360buyimg.com/mobilecms/s234x234_jfs/t1/116382/19/20754/279599/62208239E762eb7a3/0bc7951538dbef75.jpg!q70.dpg.webp"
                    tags={
                        <div>
                            <Tag plain color='red' style={{ marginRight: 5, fontSize: 8 }}>
                                30天价保
                            </Tag>
                            <Tag color="red" textColor="#fff" style={{ fontSize: 8 }}>
                                京东超市
                            </Tag>
                        </div>
                    }
                    bottom={
                        <div className={style.calculatorContianer}>
                            <span className={style.minus} onClick={decrease}>-</span>
                            <input value={productNumber} onClick={inputClick} onChange={inputChange}></input>
                            <span className={style.minus} onClick={increase}>+</span>
                        </div>
                    }
                />
            </Checkbox>

        </div>

    );
}
export default CellJD; 