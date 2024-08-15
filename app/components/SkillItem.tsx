import React from 'react'
import { motion } from 'framer-motion';

interface SkillItemProps {
  delay: number
  title: string
  content: string
  bgColor:string
}

const SkillItem: React.FC<SkillItemProps> = ({ delay, title, content, bgColor }) => {

  const skillItem = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 + delay
      }
    }
  }

  return (
    <div className='w-[31%] h-60 mb-5'>
      <motion.div
        className={`bg-white rounded-2xl px-5 py-10 h-full relative`}
        whileHover={{ scale: [null, 1.1, 1.08] }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        variants={skillItem}
        initial={"hidden"}
        animate={"visible"}
      >
        <p className={`text-3xl mb-5 border-b-2 border-gray-900 flex items-center`}><span className={`w-3 h-3 mr-2 ${bgColor}`} />{title}</p>
        <p className='text-sm' style={{ whiteSpace: 'pre-line' }}>{content}</p>
        <div className={`${bgColor} w-full h-3 absolute bottom-8 left-0 right-0`} />
      </motion.div>
    </div>
  )
}

export default SkillItem