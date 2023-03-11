import React from 'react'
import joyImage from '../assets/img/png/joyImage.png'
import positionImage1 from '../assets/img/png/positionImage1.png'
import { Container, Row, Col } from 'react-bootstrap'

function OwnThejoy() {
    return (
        <div className='mt-xl-5 pt-xl-5 position-relative'>
            <img src={positionImage1} className='position-absolute end-0 top-0 d-none d-xl-block' width={150} alt="positionImage1" />
            <div className='hero_Bg mt-5'>
                <Container>
                    <Row className='py-5 mt-xl-5 align-items-center'>
                        <Col xsm={12} lg={6} className='my-3'>
                            <img src={joyImage} className='w-100' alt="joyImage" />
                        </Col>
                        <Col xsm={12} lg={6} className='my-3 ps-xl-5'>
                            <h4 className='ff_TimesNewRoman text_green_50 fw-bold fs_xxxxl'>Own the joy</h4>
                            <p className='text_green_50 fw-normal ff_OpenSans fs_lg mw_xl_401'>Start enriching your life today, not "someday." We're here to help you experience the joy of second home ownership. With Mana, you own a spectacular second home for 1/8 of the cost, while avoiding the hassles of traditional ownership.</p>
                            <div><a className='ff_OpenSans  hover_text_white fs_lg fw-semibold text_green_50  text-decoration-underline' href="#">GET STARTED</a></div>

                        </Col>
                    </Row>
                    <Row className='py-lg-5 align-items-center'>
                        <Col xl={5} xsm={6} className='my-3'>
                            <h4 className='ff_TimesNewRoman text_green_50 fw-bold fs_xxxxl'>Forget timeshares</h4>
                            <p className='text_green_50 fw-normal fs_lg mw_xl_401'>With Mana, you own a home, not just a block of time. You can book stays throughout the year, not annually. And resale? It's fast and streamlined, and you set the price.</p>
                            <div><a className='ff_OpenSans  hover_text_white fs_lg fw-semibold text_green_50  text-decoration-underline' href="#">GET STARTED</a></div>
                        </Col>
                        <Col xl={7} xsm={6} className='my-3'>
                            <div className='overflow_xsm_scroll'>
                                <table className='border w_xsm_1000'>
                                    <tr>
                                        <td className='bg_green_50  text-white text-center fs_lg fw-semibold ff_OpenSans py-4 ' colSpan={2}>MANA HOME</td>
                                        <td className='bg_lightGreen text-white text-center fs_lg fw-semibold ff_OpenSans py-4 px-4'>RESORT TIMESHARE</td>
                                    </tr>
                                    <tr className='border bg-white'>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>PROPERTY TYPE</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>Single-family residence</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>Hotel/Condo</td>
                                    </tr>
                                    <tr className='border_x bg_grey_50'>
                                        <td className=' fs_lg fw-normal ff_OpenSans'> TRUE OWNERSHIP</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>Yes, real property</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>	No, right-to-use time</td>
                                    </tr>
                                    <tr className='border bg-white'>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>USAGE</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>Ongoing access</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans'>Fixed week(s)</td>
                                    </tr>
                                    <tr className='border_x bg_grey_50'>
                                        <td className=' fs_lg fw-normal ff_OpenSans mw_xl_103'> RESALE APPROACH</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans mw_xl_183'>Market pricing; sell on your terms</td>
                                        <td className=' fs_lg fw-normal ff_OpenSans mw_xl_183'>	Set pricing; sell with resort</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default OwnThejoy