import React from 'react';
import Container from '../atoms/Container';

const StickyNav = () => {
    return (
        <div className='sticky top-0 sticky-box p-2 border-b shadow-sm'>
                <div className='flex justify-center overflow-hidden whitespace-nowrap'>
                    <p className='text-[#0D0ED6] font-medium text-center animate-marquee'>
                        Brands: 50% off AED 1500, early bird price AED 750 <b>|</b> <span className='text-red-600'> <b>|</b> Creators: <b>Free for life</b> account, no subscription fees & 0% commission</span>
                    </p>
                </div>
        </div>
    );
};

export default StickyNav;
