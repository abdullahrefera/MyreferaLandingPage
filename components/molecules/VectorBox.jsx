import React from 'react'

const VectorBox = ({ icon, text }) => {
    return (
        <div className='sm:w-[23%] flex flex-col items-center gap-[15px]'>
            <div className='bg-[#F3FAFF] h-[338px] w-[100%] flex justify-center items-center rounded-[22px]'>
                <div className=" border-box p-[25px] sm:p-[45px] rounded-[100%] text-[45px] sm:text-[65px] bg-white ">
                    {icon}
                </div>
            </div>
            <h3 className=' text-center text-[18px] sm:text-[24px] font-[700] ' >{text}</h3>
        </div>
    )
}

export default VectorBox
