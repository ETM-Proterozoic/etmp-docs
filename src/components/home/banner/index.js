import React, {useMemo} from "react";
import './index.css'


export default function Banner(){
  return (
    <div className="home-banner">
      <div className="home-banner-l">
        <h1>Powerful, Fast, Low Cost For Web3</h1>
        <p>ETM3 is is a decentralized blockchain built to creative apps and games for everyone.</p>
        <div>
          <div className="etm3-btn-black banner-etm3-btn-black">Get Start</div>
          <div className="banner-etm3-btn-ghost">Dev Document</div>
        </div>
      </div>
      <div className="home-banner-r">
        <iframe src="/html/art/index.html" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

