/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouteInit from './router/index';
import { ConfigProvider, Tabs, Swiper, Image, Tabbar, SwipeCell } from 'react-vant';
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
  productCardOriginPriceColor: '#999',
  productCardPriceColor: '#f2270c',
  productCardTextColor: '#1a1a1a',
  productCardThumbSize: '100px',
  submitBarZIndex: '1',

};

ReactDOM.render(

  <ConfigProvider themeVars={themeVars}>
    <RouteInit></RouteInit>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
