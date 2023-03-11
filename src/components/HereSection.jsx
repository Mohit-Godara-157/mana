import React from 'react'
import downBtn from '../assets/img/svg/downBtn.svg'
import { Container } from 'react-bootstrap'

function HereSection() {
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center flex-column vh_85'>
                <h2 className='fs_xxxxxl ff_TimesNewRoman fw-bold text-white'>The modern way to buy and own a second home</h2>
                <a className='heroBtn mt-5 fw-bold fs_xl ff_OpenSans text-white' href="#">VIEW LISTINGS</a>
            </div>
            <div className='d-flex justify-content-center pb-5 pb-xl-4 '><a href="#"><img src={downBtn} alt="downbtn" /></a></div>
            <div className='pb-5 pb-xl-0'></div>
        </Container>
    )
}

export default HereSection