import React from 'react'
import market_icon from "../images/coingeckologo.png";
import market_icon1 from "../images/coinmarketcaplogo.png";
import "./Vision.css";
export default function Vision() {
  return (
    <div className="collab">
      <div className="Firstimg">
        <marquee>
          <img src={market_icon} className = "ImgOne" alt="" width={150} height={70} />
          <img src={market_icon1} className = "ImgOne" alt="" width={150} height={30} /></marquee>
      </div >
    </div>
  )
}