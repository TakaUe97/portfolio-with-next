"use client"
import Header from '@/app/components/Header'
import React from 'react'
import { motion } from 'framer-motion';

const page = () => {

  const balloon1Left = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      }
    }
  }

  return (
    <div>
      <Header />
      <div className='text-center mb-16 tracking-widest font-bold'>
        <p className='text-6xl'>ABOUT</p>
        <span>私について</span>
      </div>
      <div className='p-5'>
        <div className='mb-12'>
          <div className='text-center mb-10 text-4xl'>
            <p className='border-b-2 border-gray-900 inline-block'>Profile</p>
          </div>
          <div className='mb-5 flex gap-3 justify-center text-center'>
            <div className='mr-5 items-center flex'>
              <img src='https://icooon-mono.com/i/icon_10226/icon_102261_64.png' />
            </div>
            <motion.div
              className='balloon1-left text-3xl'
              variants={balloon1Left}
              initial={"hidden"}
              animate={"visible"}>
              <p className='mb-3'>大学卒業後はフロントエンジニアの仕事をしていました。<br />
                その後オーストラリアへ留学し<br />
                現在はパーソナルトレーナーとして働きながら。<br />
                フィットネスとプログラミングを勉強しています。
              </p>
              <p>email:takayuki97@icloud.com</p>
            </motion.div>
          </div>
        </div>
        <div className='mb-12'>
          <div className='text-center mb-10 text-4xl'>
            <p className='border-b-2 border-gray-900 inline-block'>Blog</p>
          </div>
          <div className='text-center'>
            coming soon...
          </div>
        </div>
      </div>
    </div >
  )
}

export default page