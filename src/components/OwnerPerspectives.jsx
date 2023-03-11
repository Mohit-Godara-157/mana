import React from 'react'
import manImage from '../assets/img/svg/manImage.svg'
import girlImage from '../assets/img/svg/girlImage.svg'
import man2Image from '../assets/img/svg/man2Image.svg'
import leftArrow from '../assets/img/svg/leftArrow.svg'
import rightArrow from '../assets/img/svg/rightArrow.svg'
import { Container, Row, Col } from 'react-bootstrap'

function OwnerPerspectives() {
    return (
        <Container>
            <h2 className='text-center pt-5 ff_TimesNewRoman text_green_50 fs_xxxxl fw-bold'>Owner perspectives</h2>
            <Row className='pt-4 pb-5 justify-content-center'>
                <Col className='my-3  position-relative' xsm={12} md={6} lg={4} >
                    <img src={leftArrow} className='afterImage d-none d-lg-block' alt="leftArrow" />
                    <div className='border_card card_hover p-4 h-100'>
                        <div className='d-flex align-items-center'>
                            <img src={manImage} alt="manImage" />
                            <div className='ms-3'>
                                <h4 className='mb-0 text_green_50 ff_OpenSans fs_lg fw-semibold'>John Doe</h4>
                                <p className='mb-0 text_green_50 ff_OpenSans fs_md fw-normal mt-1'>Mauris pretium,USA </p>
                            </div>

                        </div>
                        <p className='text_green_50 ff_OpenSans fs_lg fw-normal mw_xl_350 mt-3 mb-0 '>“Integer odio est, efficitur nec nibh quis, euismod ultricies diam. Quisque accumsan libero vitae massa consequat consequat. Sed eu tincidunt lacus, in” </p>
                    </div>
                </Col>
                <Col className='my-3' xsm={12} md={6} lg={4} >
                    <div className='border_card card_hover p-4 h-100'>
                        <div className='d-flex align-items-center'>
                            <img src={girlImage} alt="girlImage" />
                            <div className='ms-3'>
                                <h4 className='mb-0 text_green_50 ff_OpenSans fs_lg fw-semibold'>John Doe</h4>
                                <p className='mb-0 text_green_50 ff_OpenSans fs_md fw-normal mt-1'>Mauris pretium,USA </p>
                            </div>

                        </div>
                        <p className='text_green_50 ff_OpenSans fs_lg fw-normal mw_xl_350 mt-3 mb-0 '>“Integer odio est, efficitur nec nibh quis, euismod ultricies diam. Quisque accumsan libero vitae massa consequat consequat. Sed eu tincidunt lacus, in” </p>
                    </div>
                </Col>
                <Col className='my-3  position-relative' xsm={12} md={6} lg={4} >
                    <img src={rightArrow} className='BeforeImage d-none d-lg-block' alt="rightArrow" />
                    <div className='border_card card_hover p-4 h-100'>
                        <div className='d-flex align-items-center'>
                            <img src={man2Image} alt="man2Image" />
                            <div className='ms-3'>
                                <h4 className='mb-0 text_green_50 ff_OpenSans fs_lg fw-semibold'>John Doe</h4>
                                <p className='mb-0 text_green_50 ff_OpenSans fs_md fw-normal mt-1'>Mauris pretium,USA </p>
                            </div>

                        </div>
                        <p className='text_green_50 ff_OpenSans fs_lg fw-normal mw_xl_350 mt-3 mb-0 '>“Integer odio est, efficitur nec nibh quis, euismod ultricies diam. Quisque accumsan libero vitae massa consequat consequat. Sed eu tincidunt lacus, in” </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OwnerPerspectives