import React from 'react'
import homeImage from '../assets/img/png/homeImage.png'
import { Container, Row, Col } from 'react-bootstrap'

function FeaturedHomes() {
    return (
        <div className='position-relative'>
            <Container>
                <h2 className='pt-4 mt-3 ff_TimesNewRoman  text_green_50  fw-bold fs_xxxxl text-center'>Featured homes</h2>
                <p className='text_green_50 ff_OpenSans fw-normal fs_lg text-center'>Browse our curated selection of wow-worthy listings – homes in the most desirable locations.</p>
                <Row>
                    <Col className='my-3 ' xsm={12} xl={7}  >
                        <img className='position_absolute_xl start-0  w_100_xl  ' width={700} src={homeImage} alt="homeimage" />
                    </Col>
                    <Col className='my-3 mt-xl-5 pt-xl-4' xsm={12} xl={5}>
                        <p className='ff_OpenSans fs_lg fw-normal text_green_50  pt-xl-5'>CORONA DEL MAR, CA</p>
                        <h4 className='ff_TimesNewRoman fw-bold fs_xxxl text_green_50 '>Ocean Boulevard</h4>
                        <p className='ff_OpenSans fs_lg fw-normal text_green_50'>$ 1,263,000 . 1/8 OWNERSHIP</p>
                        <div className='d-flex align-items-center'>
                            <p className='me-2 ff_OpenSans fs_lg fw-normal text_green_50'>4 Beds  </p>
                            <p className='me-2 middle_line'></p>
                            <p className='me-2 ff_OpenSans fs_lg fw-normal text_green_50'>4.5 Baths  </p>
                            <p className='me-2 middle_line'></p>
                            <p className='me-2 ff_OpenSans fs_lg fw-normal text_green_50'>3,143 sq ft</p>
                        </div>
                        <p className='ff_OpenSans fs_lg fw-normal text_green_50'>Phasellus condimentum purus nec lacus finibus egestas. Donec a ipsum massa. Pellentesque convallis id erat ut tempor. Integer interdum purus orci, non luctus velit pulvinar quis</p>
                        <div><a className='ff_OpenSans  hover_text_white fs_lg fw-semibold text_green_50  text-decoration-underline' href="#">DETAILS</a></div>
                    </Col>
                </Row>
                <div className=''></div>
            </Container>
        </div>
    )
}

export default FeaturedHomes