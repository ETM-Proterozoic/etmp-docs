import React from 'react';
import style from './index.module.css'
import Banner from "../components/home/banner";
import Header from "../components/home/header";
import Block1 from "../components/home/block1";
import Block2 from "../components/home/block2";
import Footer from "../components/home/footer";

import Layout from '@theme/Layout';
export default function Home() {

  return (
    <>
      <div style={{display: "none"}}>
        <Layout><div></div></Layout>
      </div>
      <Header/>
      <div className={style.homePage}>
        <Banner/>
        <Block1/>
        <Block2/>
      </div>
      <Footer/>
    </>
  );
}
