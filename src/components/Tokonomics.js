import React from 'react'
import "./Tokonomics.css";
import Tokenomics1 from "../images/Tokenomics1.jpg";
import Tokenomics2 from "../images/Tokenomics2.jpg";
export default function Tokonomics() {

  const imagesLink = [
    "../images/Tokenomics1.jpg",
    ""
  ]
  
  return (
    <div className='toko--cont'>
      <h2 className='toko--heading'>Tokenomics</h2>
      <div className='toko'>
      <div className='toko--cards'>
        <img src={Tokenomics1} alt="card1"/>
        {/* <h2>Card1</h2> */}
      </div>
      <div className='toko--cards'>
        <img src={Tokenomics2} alt="card1"/>
        {/* <h2>Card2</h2> */}
      </div>
      </div>
    </div>
  )
}


// Card hover 3d effect
// const $card = document.querySelector('.card');
// let bounds;

// function rotateToMouse(e) {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   const leftX = mouseX - bounds.x;
//   const topY = mouseY - bounds.y;
//   const center = {
//     x: leftX - bounds.width / 2,
//     y: topY - bounds.height / 2
//   }
//   const distance = Math.sqrt(center.x**2 + center.y**2);
  
//   $card.style.transform = `
//     scale3d(1.07, 1.07, 1.07)
//     rotate3d(
//       ${center.y / 100},
//       ${-center.x / 100},
//       0,
//       ${Math.log(distance)* 2}deg
//     )
//   `;
  
//   $card.querySelector('.glow').style.backgroundImage = `
//     radial-gradient(
//       circle at
//       ${center.x * 2 + bounds.width/2}px
//       ${center.y * 2 + bounds.height/2}px,
//       #ffffff55,
//       #0000000f
//     )
//   `;
// }

// $card.addEventListener('mouseenter', () => {
//   bounds = $card.getBoundingClientRect();
//   document.addEventListener('mousemove', rotateToMouse);
// });

// $card.addEventListener('mouseleave', () => {
//   document.removeEventListener('mousemove', rotateToMouse);
//   $card.style.transform = '';
//   $card.style.background = '';
// });