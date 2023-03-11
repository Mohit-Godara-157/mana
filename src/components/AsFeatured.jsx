import React from 'react'
import inman from '../assets/img/svg/inman.svg'
import theReal from '../assets/img/svg/theReal.svg'
import cnbc from '../assets/img/svg/CNBC.svg'
import nyt from '../assets/img/svg/NYT.svg'
import fortune from '../assets/img/svg/Fortune.svg'
import geekwire from '../assets/img/svg/Geekwire.svg'

import { Container, Row, Col } from 'react-bootstrap'

function AsFeatured() {
    return (
        <Container>
            <h2 className='text-center pt-5 mt-4 ff_TimesNewRoman fs_xxxxl fw-bold text_green_50'>As featured in:</h2>
            <Row className='align-items-center pt-3 pb-5 mb-4 justify-content-center'>
                <Col className='my-3' xsm={12} sm={6} md={4} lg={3} xl={2}>
                    <img src={inman} className='w-100' alt="inman" />
                </Col>
                <Col className='my-3' xsm={12} sm={6} md={4} lg={3} xl={2}>
                    <img src={theReal} className='w-100' alt="theReal" />
                </Col>
                <Col className='my-3' xsm={12} sm={6} md={4} lg={3} xl={2}>
                    <img src={cnbc} className='w-100' alt="cnbc" />
                </Col>
                <Col className='my-3' xsm={12} sm={6} md={4} lg={3} xl={2}>
                    <img src={nyt} className='w-100' alt="nyt" />
                </Col>
                <Col className='my-3' xsm={12} sm={6} md={4} lg={3} xl={2}>
                    <img src={fortune} className='w-100' alt="fortune" />
                </Col>
                <Col className='my-3' xsm={12} sm={6} md={4} lg={3} xl={2}>
                    <img src={geekwire} className='w-100' alt="geekwire" />
                </Col>
            </Row>
        </Container>
    )
}

export default AsFeatured