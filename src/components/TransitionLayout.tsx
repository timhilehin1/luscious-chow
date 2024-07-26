'use client'
import React from 'react'
import { motion } from "framer-motion";

const TransitionLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "tween",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
  )
}

export default TransitionLayout


 
