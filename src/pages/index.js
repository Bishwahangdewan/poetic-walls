import React from 'react'
import FullScreenSlider from '@/components/sliders/FullScreenSlider'
import '../app/globals.css'

const Homepage = () => {
  return (
    <div className="h-screen w-full bg-black">
        
        <FullScreenSlider />

        <h1 className="text-orange-700 text-xl">Testing</h1>
    </div>
    
  )
}

export default Homepage