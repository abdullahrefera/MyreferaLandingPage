import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link href="/" passHref>
          <Image className='w-full sm:w-[185px] sm:h-[59px]' src="/images/logo.png" width={100} height={100} alt="MyRefera" />
      </Link>
    </div>
  )
}

export default Logo
