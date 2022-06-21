import React, { useState } from 'react';
import { Tag, Checkbox } from 'react-vant';
import { Arrow, InfoO } from '@react-vant/icons'
import style from './orderEdit.module.scss';
const orderEdit = (props) => {
    console.log(' query_______________', props.location.query);
    const { totalPrice, sectionList } = props.location.query;

    return (
        <div className={style.content}>
            <div className={style.addressContainer}>
                <div className={style.addressOuter}>
                    <div className={style.address}>
                        <div className={style.addressTitle}>
                            <div className={style.tagDefault}>
                                默认
                            </div>
                            河南郑州市金水区祭城路街道
                        </div>
                        <div className={style.addressContent}>
                            金水东路7号鑫苑中央花园(东区)8幢2楼
                        </div>
                        <div className={style.contact}>
                            张志峰156****6289
                        </div>
                    </div>
                    <div className={style.addressContent}>
                        <Arrow />
                    </div>
                </div>
                <div className={style.AddressFooter}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => {
                        if (item % 2 === 0) {
                            return <div key={index} className={style.even}></div>
                        } else {
                            return <div key={index} className={style.odd}></div>
                        }

                    })

                    }

                </div>
            </div>
            <div className={style.listContainer}>
                {sectionList.map((item, index) => {
                    if (item.sectionPrice > 0) {
                        return <div key={index} className={style.cell}>
                            <div className={style.cellTitle}>
                                <img src='https://storage.360buyimg.com/static-common/checkout/jd.svg' alt='' />
                                <span>{item.sectionTitle}</span>
                            </div>
                            <div className={style.cellProducts}>
                                <div className={style.swiperImageContainer}>
                                    {
                                        item.content.map((itemImg, index) => {
                                            if (itemImg.checked) {
                                                return <img key={index} src={itemImg.imgUrl} alt='' />
                                            }
                                        })
                                    }
                                </div>
                                <div className={style.numSum}>
                                    共{item.checkedNum}件<Arrow />
                                </div>
                            </div>
                            <div className={style.cellLogistics}>
                                <div className={style.cellLogContent}>
                                    <div className={style.cellLogContentLeft}>
                                        配送
                                    </div>
                                    <div className={style.cellLogContentRight}>
                                        同城速配<Arrow />
                                    </div>
                                </div>
                                <div className={style.cellLogDesc}>
                                    工作日、双休日与节假日均可送货
                                </div>

                            </div>
                            <div className={style.cellLogistics}>
                                <div className={style.cellLogContent}>
                                    <div className={style.cellLogContentLeft}>
                                        退换无忧 <InfoO />
                                    </div>
                                    <div className={style.cellLogDesc}>
                                        商家赠送
                                    </div>
                                </div>
                                <div className={style.cellLogDesc}>
                                    享运费补贴或免费取件服务
                                </div>

                            </div>
                            <div className={style.cellLogistics}>
                                <div className={style.cellLogContent}>
                                    <div className={style.cellLogContentLeft}>
                                        留言
                                    </div>
                                    <div className={style.cellLogDesc}>
                                        <input type="text" placeholder='建议留言前先与商家沟通确认' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    } else {
                        return null;
                    }
                })}

            </div>
            <div className={style.settlement}>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        商品金额
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥{totalPrice * 0.01}
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        退换无忧
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        运费（总重:164.078kg）
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        跨店满减
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        立减
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        礼金<InfoO />
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        优惠券
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        京豆
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>
                <div className={style.settlementCell}>
                    <div className={style.settlementCellLeft}>
                        礼品卡(京东卡/E卡)
                    </div>
                    <div className={style.settlementCellRight}>
                        ¥0.00
                    </div>
                </div>

            </div>
            <div className={style.paySelections}>
                <div className={style.cellLogContent}>
                    <div className={style.cellLogContentLeft}>
                        支付方式
                    </div>
                    <div className={style.cellLogContentRight}>
                        在线支付<Arrow />
                    </div>
                </div>
                <div className={style.cellLogContent}>
                    <div className={style.cellLogContentLeft}>
                        打白条
                    </div>
                    <div className={style.cellLogContentRight}>
                        <Checkbox checked={true} checkedColor='ee0a24' iconSize={'12px'} />
                    </div>
                </div>
                <div className={style.swiperPayPeriod}>
                    <div className={style.swiperPayPeriodItem}>
                        <div className={style.top}>
                            不分期
                        </div>
                        <div className={style.bottom}>
                            免服务费
                        </div>
                    </div>
                    <div className={style.swiperPayPeriodItem}>
                        <div className={style.top}>
                            ¥8985.27 ✖️ 3期
                        </div>
                        <div className={style.bottom}>
                            含服务费236.22/期
                        </div>
                    </div>
                    <div className={style.swiperPayPeriodItem}>
                        <div className={style.top}>
                            4610.78 ✖️ 6期
                        </div>
                        <div className={style.bottom}>
                            含服务费236.22/期
                        </div>
                    </div>
                    <div className={style.swiperPayPeriodItem}>
                        <div className={style.top}>
                            2423.58 ✖️ 12期
                        </div>
                        <div className={style.bottom}>
                            含服务费236.22/期
                        </div>
                    </div>
                    <div className={style.swiperPayPeriodItem}>
                        <div className={style.top}>
                            1330.07 ✖️ 24期
                        </div>
                        <div className={style.bottom}>
                            含服务费236.22/期
                        </div>
                    </div>

                </div>

            </div>
            <div className={style.invoice}>
                <div className={style.invoiceLeft}>
                    发票
                </div>
                <div className={style.invoiceRight}>
                    普票(商品明细-个人)<Arrow />
                </div>
            </div>
            <div className={style.payBar}>
                <div className={style.price}>
                    ¥{totalPrice * 0.01}
                </div>
                <div className={style.paybuttonGroup}>
                    <div className={style.payButton}>
                        自己付
                    </div>
                    <div className={style.transPayButton}>
                        帮我付
                    </div>
                </div>

            </div>
        </div>
    )

}

export default orderEdit;

