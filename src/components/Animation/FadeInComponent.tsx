'use client'
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const FadeInComponent = ({ children, delay, direction }:
     { children: React.ReactNode, delay?: number, direction: 'top' | 'bottom' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    const controls = useAnimation()

    useEffect(() => {
     if(isInView){
        controls.start('visible')
     }
     else {
        controls.set('hidden'); 
    }
    }, [isInView])
    

  return (
    <div ref={ref}>
      <motion.div
        variants={{
            hidden: {
              opacity: 0,
              y: direction === 'bottom' ? 80 : -80,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: delay ? {duration: 1, delay} : {duration: 0.3},
            },
          }}
        initial={'hidden'}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInComponent;

