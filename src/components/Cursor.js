import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

export default function Cursor() {
    const [mouseoP,setmouseP] = useState(
        {x:0,
        y:0}
    )

    useEffect(()=>{
        window.addEventListener('mousemove',(event)=>{
            setmouseP({x:event.clientX,y:event.clientY})
        })
    },[])
    const variants ={
        default:{
            x:mouseoP.x,
            y:mouseoP.y
        }

    }
  return (
    <motion.div className='cursor' variants={variants} animate={variants.default}>
        
    </motion.div>
  )
}
