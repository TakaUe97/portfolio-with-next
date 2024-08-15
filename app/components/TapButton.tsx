import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

interface TapButtonProps {
  buttonValue: string
  buttonSmallValue: string
  url: string
}

const TapButton: React.FC<TapButtonProps> = ({ buttonValue, buttonSmallValue, url }) => {

  return (
    <div className='page'>
      <Link href={url}>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.08] }}
          transition={{ duration: 0.3 }}
          role='button'>
          <p className='text-5xl mb-1'>{buttonValue}</p>
          <span>{buttonSmallValue}</span>
        </motion.div>
      </Link>
    </div>
  )
}

export default TapButton