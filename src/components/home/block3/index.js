import React from "react";
import './index.css'
import useBaseUrl from '@docusaurus/useBaseUrl';
const list = [
  {
    icon: '/img/home/block3-1.svg',
    title: 'Aave',
    desc: 'Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.',
    tag: 'DeFi'
  },
  {
    icon: '/img/home/block3-2.svg',
    title: 'QuickSwap',
    desc: 'Next-gen Layer 2 DEX. Trade at lightning-fast speeds with near-zero gas fees.',
    tag: 'DeFi'
  },
  {
    icon: '/img/home/block3-3.svg',
    title: 'SushiSwap',
    desc: 'The SushiSwap protocol realigns incentives for network participants by introducing revenue sharing and ',
    tag: 'DeFi'
  },
  {
    icon: '/img/home/block3-4.svg',
    title: 'Decentraland',
    desc: 'Decentraland is a virtual game world run by its users. Every piece of land and every item in the virtual land is a non-',
    tag: 'NFT'
  },
  {
    icon: '/img/home/block3-5.svg',
    title: 'Milkbox',
    desc: 'Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.',
    tag: 'Game'
  },
  {
    icon: '/img/home/block3-6.svg',
    title: 'Evolution Land',
    desc: 'Evolution Land is the first Defi+NFT cross-chain game with each continent built on different blockchain networks.',
    tag: 'Game'
  },
  {
    icon: '/img/home/block3-7.svg',
    title: 'ESCROW PROTOCOL',
    desc: 'The Escrow Protocol is a decentralized web3 accelerator and crowdfunding platform.',
    tag: 'DAO'
  },
  {
    icon: '/img/home/block3-8.svg',
    title: 'nfDAO',
    desc: 'nfDAO is a community DAO whose primary mission is to support and fund NFT projects.',
    tag: 'DAO'
  }
]
export default function Block3(){
  return (
    <div className="home-block3">
      <h1 className="home-block3-title" id="Ecosystem">Ecosystem</h1>
      <div className="home-block3-list">
        {
          list.map((item, index) => (
            <div key={index} className="home-block3-item">
              <div>
                <img src={useBaseUrl(item.icon)} alt=""/>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
              <span>
              <span className={"home-block3-item-tag home-block3-tag-" + item.tag}>{item.tag}</span>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
