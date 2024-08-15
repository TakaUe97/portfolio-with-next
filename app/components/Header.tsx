"use client"

import Link from 'next/link'

const Header = () => {

  return (
    <div className='flex justify-between py-5 px-10 text-2xl w-full font-bold'>
      <div>
        <Link href={"/"}>My Portfolio Site</Link>
      </div>
    </div>
  )
}

export default Header