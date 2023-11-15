import React from 'react'
import loader from '../1484 (1).gif'
import {AnimatePresence, motion} from 'framer-motion'
export default function Loading() {
  return (
    <>

    <div className='Img-Wrapper'>
        <div className='quote'>
        <p>The best way to predict the future is to invent it.</p>
        <p>-Alan Kay</p>
        </div>
        <img src={loader}/>
    </div>
    <motion.div 
        className='slide-out'
        initial={{ scaleY:1 }}
        animate={{scaleY:0 }}
        exit={{ scaleY:1}}
        transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>

    </>
  )
}
