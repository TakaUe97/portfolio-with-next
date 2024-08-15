"use client"

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import TapButton from '@/app/components/TapButton';

const Main = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const siteTitle = {
    initial:{
      opacity:0,
      x: 10
    },
    animate:{
      opacity:1,
      x: 0,
      transition:{
        duration: 1.5,
        delay: 2
      }
    }
  }

  return (
    <div>
      <svg id="progress" viewBox="0 0 100 100" className='stroke-[15%] stroke-blue-900 fill-none -rotate-90 absolute h-[100vh] top-0 left-0 bottom-0 right-0 m-auto'>
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.1 }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="opacity-20"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-blue-900 opacity-40"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div ref={ref} className='h-[100vh] overflow-auto snap-y snap-mandatory m-auto'>
        <div className='page text-5xl text-nowrap'>
          <motion.div
          variants={siteTitle}
            initial={"initial"}
            animate={"animate"}
          >
            <span> My Portfolio Site</span>
          </motion.div>
          <motion.div
            className='absolute bottom-12 border-b-2 border-black text-lg tracking-wide'
            initial={{
              opacity: 0,
              y: 20,
              rotate: 90
            }}
            animate={{
              opacity: [0, 1, 0], // 追加: opacityのアニメーションを変更
              y: [20, 0, -20]
            }}
            transition={{
              duration: 2,
              delay: 2.5,
              repeat: Infinity,
              repeatType: "loop"
            }}>
            scroll
          </motion.div>
        </div>
        <TapButton buttonValue={"SKILLS"} buttonSmallValue={"スキル"} url={"pages/Skills"} />
        <TapButton buttonValue={"WORKS"} buttonSmallValue={"制作"} url={"pages/Works"} />
        <TapButton buttonValue={"ABOUT"} buttonSmallValue={"私について"} url={"pages/About"} />
      </div>
    </div>
  )
}

export default Main