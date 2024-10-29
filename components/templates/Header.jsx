"use client"
import React from 'react'
import Container from '../atoms/Container'
import Logo from '../atoms/Logo'
import Navbuttons from '../atoms/Navbuttons'

const Header = ({ activeTab, onTabClick }) => {

    return (
        <div className='py-[30px] border-b'>
            <Container>
                <div className='flex items-center justify-between sm:justify-start sm:gap-72 '>
                    <div>
                        <Logo />
                    </div>
                    <div className=''>
                    <Navbuttons activeTab={activeTab} onTabClick={onTabClick} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
