import React from 'react'
import image1 from '../assets/img/svg/image1.svg'
import image2 from '../assets/img/svg/image2.svg'
import image3 from '../assets/img/svg/image3.svg'
import { Col, Container, Row } from 'react-bootstrap'

function FindYour() {
    return (
        <div className='hero_Bg' id='down'>
            <Container>
                <h3 className='pt-5 text-center text_green_50 fs_xxxxl fw-bold  ff_TimesNewRoman'>Find your second home with Mana</h3>
                <p className='text-center text_green_50 ff_OpenSans fw-normal fs_lg mb-0'>We make it simple</p>
                <Row className='py-5 justify-content-center'>
                    <Col className='my-3' xsm={12} md={6} lg={4} >
                        <div className='d-flex align-items-start card_hover p-3 h-100'>
                            <img src={image1} width={33} height={33} alt="image1" />
                            <div className='ms-2'>
                                <h5 className='ff_TimesNewRoman mb-0  text_green_50 fw-bold fs_xxl'>Shop</h5>
                                <p className='fs_lg fw-normal mw_xl_302 text_green_50 mt-3 mb-0 ff_OpenSans'>Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own.</p>
                            </div>

                        </div>
                    </Col>
                    <Col className='my-3' xsm={12} md={6} lg={4} >
                        <div className='d-flex align-items-start card_hover p-3 h-100'>
                            <img src={image2} width={33} height={33} alt="image2" />
                            <div className='ms-2'>
                                <h5 className='ff_TimesNewRoman mb-0  text_green_50 fw-bold fs_xxl'>Own</h5>
                                <p className='fs_lg fw-normal mw_xl_302 text_green_50 mt-3 mb-0 ff_OpenSans'>We create a property LLC for each home, find and vet co-owners, and handle all the sales details. At closing, the co-owners enjoy 100% ownership of the home – Pacaso does not retain any shares</p>
                            </div>

                        </div>
                    </Col>
                    <Col className='my-3' xsm={12} md={6} lg={4} >
                        <div className='d-flex align-items-start card_hover p-3 h-100'>
                            <img src={image3} width={33} height={33} alt="image" />
                            <div className='ms-2'>
                                <h5 className='ff_TimesNewRoman mb-0  text_green_50 fw-bold fs_xxl'>Enjoy</h5>
                                <p className='fs_lg fw-normal mw_xl_319 text_green_50 mt-3 mb-0 ff_OpenSans'>We take care of furnishings, repairs, utilities and property management – you just show up and relax. Scheduling is easy and equitable with our app and SmartStay™ technology.</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div className='pb-5 d-flex justify-content-center '><a className='ff_OpenSans  hover_text_white fs_lg fw-semibold text_green_50  text-decoration-underline pb-md-4' href="#">GET STARTED</a></div>
            </Container>
        </div>
    )
}

export default FindYour