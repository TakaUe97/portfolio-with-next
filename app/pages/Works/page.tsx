import Header from '@/app/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <div className='text-center mb-16 tracking-widest font-bold'>
        <p className='text-6xl'>WORKS</p>
        <span>制作</span>
      </div>
      <div className='flex flex-wrap justify-between p-5 gap-3'>
        <div className='w-[30%]'>
          <a href="https://rulemakers.io" target="_blank" rel="noopener noreferrer">
            <div className='mb-3 text-lg'>
              <div className='relative work-item mb-3'>
                <img className='h-60 w-full object-cover object-center inline-block relative' src="https://i0.wp.com/rulemakers.io/wp-content/uploads/AdobeStock_498231018.jpeg?fit=7360%2C4140&ssl=1" alt="Description" />
              </div>
              <p>RULEMAKERS DAO</p>
            </div>
            <div className='bg-black text-white rounded-2xl text-center inline-block py-1 px-3'>
              <p>WordPress</p>
            </div>
          </a>
        </div>
      </div>
    </div >
  )
}

export default page