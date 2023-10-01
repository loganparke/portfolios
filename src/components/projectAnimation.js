import React, { useState, useEffect } from 'react';
import Twocard from '../assets/2card.jpg'
import logo from '../logo.svg';

const ProjectAnimation = (images) => {
 
  const bigImages = images.bigImages;
  const smallImages = images.smallImages;
  console.log(bigImages)
  const [hover, setHover] = useState()

  useEffect(() => {
  if(hover === true){
    const bigCard1 = document.getElementById('bigCard1')
    bigCard1.classList.add('animateBigCard')
    const bigCard2 = document.getElementById('bigCard2')
    bigCard2.classList.add('animateBigCard')
    const bigCard3 = document.getElementById('bigCard3')
    bigCard3.classList.add('animateBigCard')
    const bigCard4 = document.getElementById('bigCard4')
    bigCard4.classList.add('animateBigCard')

    const smallCard1 = document.getElementById('smallCard1')
    smallCard1.classList.add('animateBigCard')
    const smallCard2 = document.getElementById('smallCard2')
    smallCard2.classList.add('animateBigCard')
    const smallCard3 = document.getElementById('smallCard3')
    smallCard3.classList.add('animateBigCard')
    const smallCard4 = document.getElementById('smallCard4')
    smallCard4.classList.add('animateBigCard')
  }
  if(hover === false){
    const bigCard1 = document.getElementById('bigCard1')
    bigCard1.classList.remove('animateBigCard')
    const bigCard2 = document.getElementById('bigCard2')
    bigCard2.classList.remove('animateBigCard')
    const bigCard3 = document.getElementById('bigCard3')
    bigCard3.classList.remove('animateBigCard')
    const bigCard4 = document.getElementById('bigCard4')
    bigCard4.classList.remove('animateBigCard')

    const smallCard1 = document.getElementById('smallCard1')
    smallCard1.classList.remove('animateBigCard')
    const smallCard2 = document.getElementById('smallCard2')
    smallCard2.classList.remove('animateBigCard')
    const smallCard3 = document.getElementById('smallCard3')
    smallCard3.classList.remove('animateBigCard')
    const smallCard4 = document.getElementById('smallCard4')
    smallCard4.classList.remove('animateBigCard')
  }
}, [hover])

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='projectWrapper'>
        <img className='bigCardImg' src={bigImages[0]} id='bigCard1'/>
        <img className='bigCardImg smallCardImg' src={smallImages[0]} id='smallCard1'/>
        <img className='bigCardImg' src={bigImages[1]} id='bigCard2'/>
        <img className='bigCardImg smallCardImg' src={smallImages[1]} id='smallCard2'/>
        <img className='bigCardImg ' src={bigImages[2]} id='bigCard3'/>
        <img className='bigCardImg smallCardImg' src={smallImages[2]} id='smallCard3'/>
        <img className='bigCardImg' src={bigImages[3]} id='bigCard4'/>
        <img className='bigCardImg smallCardImg' src={smallImages[3]} id='smallCard4'/>
    </div>
  )
}

export default ProjectAnimation;