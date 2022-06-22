import React, { useState, useEffect } from 'react';
import { ProductCard, Tag, Checkbox } from 'react-vant';
import { Arrow } from '@react-vant/icons'
import style from './cell.module.scss';

const CellJD = (props) => {

    const [productNumber, setProductNumber] = useState(props.item.num);
    const [productChecked, setProductChecked] = useState(props.item.checked);
    useEffect(() => {
        const sumPrice = props.item.checked ? props.item.price * productNumber : 0;
        props.handleSection( props.item.checked, props.index, sumPrice, productNumber);
    }, [ props.item.checked]);

    const increase = (e) => {
        e.stopPropagation();
        setProductNumber( 
            productNumber => {
                const num = productNumber + 1;
                const sumPrice = productChecked ? props.item.price * num : 0;
                props.handleSection(productChecked, props.index, sumPrice, num);
                return num;
            }
        );
    }
    const decrease = (e) => {
        e.stopPropagation();
        productNumber > 0 && setProductNumber(
            productNumber => {
                const num = productNumber - 1;
                const sumPrice = productChecked ? props.item.price * num : 0;
                props.handleSection(productChecked, props.index, sumPrice, num);
                return num;
        });

    }
    const inputClick = (e) => {
        e.stopPropagation();

    }
    const cellCheck = (val) => {
        // val ? props.handleSection(val) : props.handleSection(false);
        setProductChecked(val);
        const sumPrice = val ? props.item.price * productNumber : 0;
        props.handleSection(val, props.index, sumPrice, productNumber);
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
                    price={props.item.price * 0.01}
                    desc="台式1600倍（可选组合套装），儿童显微镜"
                    title={props.item.name}
                    thumb={props.item.imgUrl}
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