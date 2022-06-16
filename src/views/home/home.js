import React, { useEffect, useState, useRef } from 'react';
// import closeImage from '../../images/close.png';
// import logoImage from '../../images/logo.png';
import bannerImage from '../../upload/banner.dpg';
import pic11Image from '../../upload/pic11.dpg';
import pic22Image from '../../upload/pic22.dpg';
import pic33Image from '../../upload/pic33.dpg';
import nav1Image from '../../upload/nav1.webp';
import nav2Image from '../../upload/nav2.webp';
import new1Image from '../../upload/new1.dpg';
import new2Image from '../../upload/new2.dpg';
import new3Image from '../../upload/new3.dpg';
import category from '../../images/category.png';
import style from './home.module.scss';
import { ConfigProvider, Tabs, Swiper, Image, Tabbar, SwipeCell } from 'react-vant';
import { images, itemCateList } from './images';
import { flowItemList } from './flowItems'
import { WapHomeO, CartO, UserO, QrInvalid, FireO } from '@react-vant/icons';
const themeVars = {
    rateIconFullColor: '#ffcc56',
    sliderBarHeight: '4px',
    sliderButtonWidth: '20px',
    sliderButtonHeight: '20px',
    sliderActiveBackgroundColor: '#951fff',
    buttonPrimaryBorderColor: '#951fff',
    buttonPrimaryBackgroundColor: '#951fff',
    swipeBorderRadius: '5px',
    tabTextColor: '#5A5556',
    tabActiveTextColor: '#FC4C2F',
    tabsBottomBarColor: '#FC4C2F',
};
const itemList = () => {
    return (
        <div className={style.itemList}>
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
    );

}
const Home = (props) => {
    const myRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    var delta = 0;
    var beforeScrollTop = 0;
    const tabSelect = (v) => {
        switch (v) {
            case 3:
                props.history.push('/cart')
                break;
            case 4:
                props.history.push('/user')
                break;

            default:
                break;
        }
    }
    const handleScroll = (e) => {
        //滚动条高度
        e = e || window.event;
        let ctx = this;
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let clientWidth = document.documentElement.clientWidth; //可视区域高度

        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        let afterScrollTop = document.documentElement.scrollTop;
        delta = afterScrollTop - beforeScrollTop;
        beforeScrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 0 && scrollTop <= 44) {
            if (delta > 2) {
                //向下滚动
                myRef.current.className = style.movingSearch;
                myRef.current.style.width = clientWidth - scrollTop * 2.2 + 'px';
                console.log('*****************', myRef.current);

                myRef.current.style.top = 53 - scrollTop + 'px';


            } else if (delta <= 2) {
                //向上滚动
                myRef.current.className = style.searchWrap;
                myRef.current.style.width = clientWidth - scrollTop * 2.2 + 'px';
                myRef.current.style.top = 53 - scrollTop + 'px';

            }
            console.log(clientHeight, scrollTop, scrollHeight);
            ctx.setState({ style: { display: "block", } })
        } else {
            ctx.setState({ style: { display: "none", } })
        }

    }
    return (
        <div>
            <div className={style.header}>
                <div className={style.headerBox}>
                    <div className={style.leftIcon}></div>
                    <div className={style.right}>
                        <div className={style.strategy}></div>
                        <div className={style.service}></div>

                    </div>
                </div>
                <div className={style.searchWrap} ref={myRef}>
                    <div className={style.search}>
                        <div className={style.leftFlex}>
                            <div className={style.sou}></div>
                            <input type="text" placeholder='消毒水'></input>
                        </div>

                        <div className={style.rightFlex}>
                            <div className={style.cameraIcon}></div>
                            <div className={style.scanIcon}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.tabContainer}>
                <div className={style.category}>
                    <img src={category} alt=''></img>
                    <div>分类</div>
                </div>
                <Tabs sticky>
                    {['首页', '运动', '家电', '酒水饮料', '生鲜', '电脑办公', '内衣配饰', '男装', '手机', '食品', '个户清洁', '母婴童装', '家具厨具'].map((item) => (
                        <Tabs.TabPane key={item} title={item} >
                            <div className={style.demoSwiper}>
                                <Swiper autoplay={true} loop={true} >
                                    {images.map((image) => (
                                        <Swiper.Item key={image}>
                                            <Image lazyload src={image} />
                                        </Swiper.Item>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={style.hotPos}>
                                <div className={style.hotPosInner}>
                                    <div className={style.leftPos}>
                                        <img src='https:////m11.360buyimg.com/babel/s204x183_jfs/t1/107558/2/18067/114701/6295d152E6f36b4f9/969f47c3e453f0eb.jpg!q70.dpg.webp'>
                                        </img>
                                        <div>
                                            welcome
                                        </div>
                                    </div>
                                    <div className={style.midPos}>
                                        <img src='https://m15.360buyimg.com/mobilecms/jfs/t1/11723/32/16925/81614/629030b2Eeda56c3e/4e7517cd2496d55e.jpg!cr_1125x449_0_166!q70.jpg' />
                                        <div>
                                            京东618
                                        </div>
                                    </div>
                                    <div className={style.rightPos}>
                                        <img src='https://m11.360buyimg.com/babel/s204x183_jfs/t1/211509/30/11257/235377/61a77375Ed61f8d00/6f82685531ac2dcb.jpg!q70.dpg.webp' />
                                        <div>
                                            welcome
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <Swiper>
                                {itemCateList.map((item) => (
                                    <Swiper.Item key={item}>
                                        <nav className={style.clearfix}>
                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav2Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                            <a href="">
                                                <img src={nav1Image} alt='' />
                                                <span>京东超市</span>
                                            </a>

                                        </nav>
                                    </Swiper.Item>
                                ))}
                            </Swiper>
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
        </div>
    );
};

export default Home;