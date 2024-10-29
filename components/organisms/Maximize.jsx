import React from 'react'
import Container from '../atoms/Container'
import Waitlist from '../atoms/WaitlistButton'
import Image from 'next/image'

const Maximize = () => {
  return (
    <Container>
      <div className='flex flex-col text-center sm:text-left sm:flex-row justify-between sm:pb-[50px] w-[100%] items-center ' >
        <div className=' flex flex-col gap-[20px] w-full sm:w-[30%] mt-[60px] order-2 sm:order-1'>
          <h2 className='text-[24px] sm:text-[48px] font-[700] sm:max-w-[350px] sm:leading-[57px] ' >Maximize Your Revenue & Reach</h2>
          <p className=' sm:text-[24px] text-center sm:text-left font-[400] sm:leading-[36px] text-[#323B49] max-w-[350px]  ' >Post Your Campaign Budget Receive Collaboration Requests Watch Your Sales Grow</p>
          <Waitlist />
        </div>

        <div className=' sm:w-[70%] items-right order-1 sm:order-2'>
          <Image className='w-[100%]' src="/images/Frame 1000003925.png" width={550} height={100} alt="MyRefera" />
        </div>
      </div>
    </Container>
  )
}

export default Maximize
