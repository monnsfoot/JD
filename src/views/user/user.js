import React from 'react';
import style from './user.module.scss';
import { Arrow, Diamond, StarO, ShopO, ClockO, CreditPay, SendGiftO, Records, AfterSale, OrdersO, Paid } from '@react-vant/icons'
import nav2Image from '../../upload/nav2.webp';
import junePromot from '../../images/junepromot.png'
import { ConfigProvider, Tabs, Image } from 'react-vant';
import { flowItemList } from '../home/flowItems'
import { images, itemCateList } from '../home/images';


const user = () => {
    return (
        <div className={style.content}>
            <div className={style.myHeader}>
                <div className={style.userInfo}>
                    <div className={style.avatarWrap}>
                        <img src="https://storage.360buyimg.com/i.imageUpload/6a645f3433353034346236386330373331343536313437323236313134_mid.jpg" alt=''></img>
                    </div>
                    <div className={style.personalWrap}>
                        <div className={style.nameWrap}>
                            <span>Apple</span>
                            <div className={style.vip}>
                            </div>
                        </div>
                        <div className={style.judges}>
                            <span>京享值482 <Arrow fontSize={'8px'} /> </span>
                            <span>小白守约349分 <Arrow fontSize={'8px'} /> </span>
                            <span>家庭号码 <Arrow fontSize={'8px'} /> </span>

                        </div>
                    </div>
                </div>
                <div className={style.plusMember}>
                    <div>
                        <div className={style.Diamond}>
                            <Diamond /><span>开通会员</span>
                        </div>
                        <div className={style.desc}>
                            购物返10倍京豆
                        </div>

                    </div>
                    <div className={style.second}>
                        <img src={nav2Image} alt='' />
                        <div>
                            <span>品质冰箱<Arrow fontSize={'8px'} /></span>
                            <span>赠PLUS</span>
                        </div>
                    </div>
                    <div className={style.second}>
                        <img src={nav2Image} alt='' />
                        <div>
                            <span>0元开卡<Arrow fontSize={'8px'} /></span>
                            <span>送30 元红包</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.order}>
                <div className={style.orderSubmit}>
                    <div>
                        <StarO />商品收藏51
                    </div>
                    <div>
                        <ShopO />店铺收藏76
                    </div>
                    <div>
                        <ClockO />我的足迹100
                    </div>

                </div>
                <div className={style.orderData}>
                    <div>
                        <CreditPay fontSize={'30px'} />待付款
                    </div>
                    <div>
                        <SendGiftO fontSize={'30px'} />待收货
                    </div>
                    <div>
                        <Records fontSize={'30px'} />待评价
                    </div>
                    <div>
                        <AfterSale fontSize={'30px'} />退换/售后
                    </div>
                    <div>
                        <OrdersO fontSize={'30px'} />我的订单
                        <span>
                            查看我的订单
                        </span>
                    </div>

                </div>
            </div>
            <div className={style.binance}>
                <div>
                    <div className={style.binanceValue}>
                        <p>109</p>
                    </div>
                    <div className={style.binanceDesc}>
                        <p>京豆</p>
                    </div>
                </div>
                <div>
                    <div className={style.binanceValue}>
                        <p>31</p>
                    </div>
                    <div className={style.binanceDesc}>
                        <p>优惠券</p>
                        <span>下单立减</span>
                    </div>
                </div>

                <div>
                    <div className={style.binanceValue}>
                        <p>0.00</p>
                        <span>元</span>
                    </div>
                    <div className={style.binanceDesc}>
                        <p>白条</p>
                        <span>积分还白条</span>
                    </div>
                </div>

                <div>
                    <div className={style.binanceValue}>
                        <p>20.00</p>
                        <span>万</span>
                    </div>
                    <div className={style.binanceDesc}>
                        <p>金条借款</p>
                        <span>拒就赔5元</span>
                    </div>
                </div>
                <div>
                    <div className={style.binanceValue}>
                        <Paid fontSize={'30px'} />
                    </div>
                    <div className={style.binanceDesc}>
                        <p>我的钱包</p>
                    </div>
                </div>

            </div>
            <div className={style.JunePromot}>
                <div className={style.promotTop}>
                    <div className={style.promotTopLeft}>
                        我的618
                    </div>
                    <div className={style.promotTopRight}>
                        送30元红包<Arrow fontSize={'8px'} />
                    </div>
                </div>
                <div className={style.promotBottom}>
                    <div>
                        <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                        <div>主会场</div>
                        <span>慢299减50</span>
                    </div>
                    <div>
                        <img src='https://m.360buyimg.com/babel/jfs/t1/165507/30/24254/120803/62845650Ea7880f53/7071af9b6c1dfe2b.gif' />
                        <div>主会场</div>
                        <span>慢299减50</span>
                    </div>
                    <div>
                        <img src='https://m11.360buyimg.com/babel/s489x489_jfs/t1/189973/25/8657/153905/60cb1624Ee389b1ab/b32a763985ec2042.jpg!q70.dpg.webp' />
                        <div>主会场</div>
                        <span>慢299减50</span>
                    </div>
                    <div>
                        <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                        <div>主会场</div>
                        <span>慢299减50</span>
                    </div>
                </div>
            </div>
            <div className={style.orderTask}>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg' />
                    <div>京东超市</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg' />
                    <div>数码电器</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg' />
                    <div>京东服饰</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg' />
                    <div>京东生鲜</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg' />
                    <div>京东到家</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg' />
                    <div>充值缴费</div>
                </div>
            </div>
            <div className={style.orderTask}>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg' />
                    <div>京东超市</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg' />
                    <div>数码电器</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg' />
                    <div>京东服饰</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg' />
                    <div>京东生鲜</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg' />
                    <div>京东到家</div>
                </div>
                <div>
                    <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg' />
                    <div>充值缴费</div>
                </div>
            </div>
            <div className={style.jdMember}>
                <div className={style.jdMemberTop}>
                    <div className={style.promotTopLeft}>
                        我的精选生活
                    </div>
                    <div className={style.promotTopRight}>
                        全部<Arrow fontSize={'8px'} />
                    </div>
                </div>
                <div className={style.jdMemberCardList}>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg' />
                            <span>我的PLUS会员店</span>
                        </div>
                        <div className={style.cardCenter}>
                            <div className={style.centerTitle}>
                                PLUS会员618狂欢
                            </div>
                            <div className={style.centerDesc}>
                                送30元无门槛红包
                            </div>
                            <div className={style.centerBottom}>
                                <div className={style.cardButton}>
                                    立即开通
                                </div>
                                <img src='https://m.360buyimg.com/babel/jfs/t1/193777/26/24894/144960/628c6cf2Ef369aca1/fccbf0588b0cf430.png!q70.webp' />
                            </div>

                        </div>
                        <div className={style.cardBottom}>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/46619/16/18232/82436/62a09858E1724a995/cb791a3384416ccf.jpg!q70.dpg.webp' />
                                <div>¥99.8</div>
                            </div>
                            <div className={style.cardBottomItem}>
                                <img src='https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/195182/28/11394/176019/60def3a2E47462b2d/4a08cd27f70ad404.jpg!q70.dpg.webp' />
                                <div>¥11</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Tabs sticky>
                {['首页', '运动', '家电', '酒水饮料', '生鲜', '电脑办公', '内衣配饰', '男装', '手机', '食品', '个户清洁', '母婴童装', '家具厨具'].map((item) => (
                    <Tabs.TabPane key={item} title={item} >
                        <div className={style.flow}>
                            {flowItemList.map((item) => (
                                <div className={style.item} key={item.desc}>
                                    <div className={style.itemImg}>
                                        <Image lazyload src={item.image} width="100%" height="100%" />
                                    </div>
                                    <div className={style.itemInfo}>
                                        <div className={style.itemTitle}>
                                            <span className={style.itemTitleText}>
                                                {item.title}
                                            </span>
                                        </div>
                                        <div className={style.itemDesc}>
                                            <span className={style.itemDescText}>
                                                {item.desc}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <Image
                                        src={images.item1}
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                                <div className={style.itemInfo}>
                                    <div className={style.itemTitle}>
                                        <span className={style.itemTitleText}>
                                            【第二季】黑色森林
                                        </span>
                                    </div>
                                    <div className={style.itemDesc}></div>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
    );

}
export default user