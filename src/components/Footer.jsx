import React from 'react'
import logo from '../assets/img/svg/logo.svg'
import googlePlay from '../assets/img/svg/googlePlay.svg'
import appStore from '../assets/img/svg/appStore.svg'
import insta from '../assets/img/svg/insta.svg'
import path from '../assets/img/svg/path.svg'
import linkdin from '../assets/img/svg/linkdin.svg'
import twitter from '../assets/img/svg/twitter.svg'
import youtube from '../assets/img/svg/youtube.svg'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className='bg_green_50'>
            <Container>
                <Row className=' align-items-center'>
                    <Col xsm={12} xl={6} className='my-3'>
                        <img src={logo} width={90} alt="logo" />
                        <h5 className='fs_sm fw-semibold mt-4 text-white ff_OpenSans '>SIGN UP FOR FULL ACCESS</h5>
                        <p className='fs_sm fw-normal mt-4 text-white ff_OpenSans'>Unlock exclusive features & receive updates</p>
                        <div className='bg-white b_radius_31  mw_344 d-flex align-items-center mt-4'>
                            <input type="email" placeholder='Email' className='border-0 outline_none py_20 ps-1 ps-sm-4 pe-4 b_radius_31 ff_OpenSans fs_sm fw-normal' />
                            <div className='d-flex justify-content-end'><a className='footer_btn ff_OpenSans fs_sm fw-semibold text-white' href="#">UNLOCK</a></div>
                        </div>
                    </Col>
                    <Col xsm={12} xl={6} className='my-3'>
                        <Row className='align-items-start'>
                            <Col className='my-3' xs={6} md={4}>
                                <ul className='p-0'>
                                    <li className='fs_sm fw-semibold  text-white ff_OpenSans'>OFFERINGS</li>
                                    <li className='mt-3'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Learn</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Listings</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Scheduling</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Financing</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Closing</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Selling</a></li>

                                </ul>
                            </Col>
                            <Col className='my-3' xs={6} md={4}>
                                <ul className='p-0'>
                                    <li className='fs_sm fw-semibold  text-white ff_OpenSans'>ABOUT</li>
                                    <li className='mt-3'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Our story</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Agents</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Careers</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Get the inside story</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Press</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Communities</a></li>

                                </ul>
                            </Col>
                            <Col className='my-3' xs={6} md={4}>
                                <ul className='p-0'>
                                    <li className='fs_sm fw-semibold  text-white ff_OpenSans'>SUPPORT</li>
                                    <li className='mt-3'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Resources</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">FAQs</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Privacy</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Candidate Privacy</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Sitemap</a></li>
                                    <li className='mt-2'><a className='fs_sm hover_line position-relative fw-normal  text-white ff_OpenSans' href="#">Contact</a></li>

                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <div className='footer_lines '></div>
                <div className='d-lg-flex justify-content-between pe-5 align-items-center '>
                    <div className='d-sm-flex py-3 py-sm-4 align-items-center '>
                        <a className='ms-2' href="#"><img className='my-2' src={googlePlay} alt="googlePlay" /></a>
                        <a href="#"><img className='my-2' src={appStore} alt="appStore" /></a>
                    </div>
                    <a className='p-4 p-lg-0 ' href="#"><img className='my-2 my-lg-0' src={insta} alt="insta" /></a>
                    <a className='p-4 p-lg-0 ' href="#"><img className='my-2 my-lg-0' src={path} alt="path" /></a>
                    <a className='p-4 p-lg-0 ' href="#"><img className='my-2 my-lg-0' src={linkdin} alt="linkdin" /></a>
                    <a className='p-4 p-lg-0 ' href="#"><img className='my-2 my-lg-0' src={twitter} alt="twitter" /></a>
                    <a className='p-4 p-lg-0 ' href="#"><img className='my-2 my-lg-0' src={youtube} alt="youtube" /></a>


                </div>
                <div className='footer_lines '></div>
                <p className='py-4 mb-0 text-white fs_xsm fw-normal ff_OpenSans text-center'>@copyrightmana2021</p>

            </Container>
        </div>
    )
}

export default Footer