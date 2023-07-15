import React,{useEffect, useState} from 'react'
import { imageSlide } from '@/library/staticData/data'


import {BsArrowDown, BsArrowUp} from 'react-icons/bs'
import { motion } from 'framer-motion'

const FullScreenSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const [position, setPosition] = useState(0);
  const [brightness, setBrightness] = useState(100);

//   useEffect(() => {
//     if(brightness = 0){
//         setTimeout(() => {
//             setBrightness(100)
//         },[1000])
//     }
//   },[brightness])

  const bgImageStyle={
    backgroundImage:`url(${imageSlide[currentState].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    height:'100%',
  }

  const goToNext = (slide) => {
    setCurrentState(slide);
  }

  const handleUp = () => {
    if(position !== 0){
        let newPosition = position - 100;
        setPosition(newPosition)

        // setBrightness(0);
    }
  }

  const handleDown = () => {
    let highestPosition = (imageSlide.length -1) *100;
    if(position < highestPosition){
        let newPosition = position + 100;
        setPosition(newPosition)
    }
  }

//   useEffect(() => {
//     const timer = setTimeout(() => {
//         if(currentState === 2){
//             setCurrentState(0)
//         }else{
//             setCurrentState(currentState + 1)
//         }

//         return () => clearTimeout(timer)
//     },5000)
//   },[currentState])


  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
        {imageSlide.map(img => (
            <motion.div style={{
                backgroundImage:`url(${img.url})`,
                backgroundPosition:'center',
                backgroundSize:'cover',
                height:'100%',
            }}
            initial={{filter:'brightness(0%)'}}
            animate={{y:`-${position}vh`,filter:`brightness(${brightness}%)`}}
            transition={{duration:0.6, delay:0.2}}
            >
                
            </motion.div>
        ))}
        {/* <motion.div   
            initial={{y:'100vh', opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}} style={bgImageStyle}>
       
        </motion.div> */}

             {/* <motion.img 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1}}
                className="carousel-img" src={imageSlide[currentState].url} 
            /> */}

        <div className='carousel-button'>
            <BsArrowUp style={{color: '#fff',cursor: 'pointer'}} onClick={() => handleUp()} />
            {
                imageSlide.map((imageSlide,currentState) => (
                    <span key={currentState}></span>
                ))
            }
            <BsArrowDown style={{color: '#fff', cursor:'pointer'}} onClick={() => handleDown()} />
        </div>
    </div>
  )
}

export default FullScreenSlider