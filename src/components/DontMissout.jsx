import React from 'react'
import absoluteImage2 from '../assets/img/png/positionImage2.png'
import absoluteImage3 from '../assets/img/png/positionImage3.png'
import { Container } from 'react-bootstrap'

function DontMissout() {
    return (
        <div className='hero_Bg position-relative'>
            <img src={absoluteImage2} className='position-absolute d-none d-lg-block start-0 top_18 ' width={170} alt="absoluteImage2" />
            <img src={absoluteImage3} className='position-absolute d-none d-lg-block end-0 bottom_0 ' width={130} alt="absoluteImage3" />
            <Container>
                <h2 className='pt-5 mt-4 fs_xxxxl fw-bold  text_green_50 ff_TimesNewRoman text-center '>Don't miss out</h2>
                <p className='text-center fs_lg fw-normal text_green_50 ff_OpenSans mw_xl_501 mx-auto'>The best homes sell fast. See the latest listings, inspiring second homes and buying tips.</p>
                <div className='mw_xl_501 mx-auto mt-5'>
                    <input type="text" className='border-0 bg-transparent outline_none' placeholder='ENTER  EMAIL' />
                    <div className='border_bottom'></div>
                    <p className='mb-0 pt-4 fs_lg fw-normal text_green_50 ff_OpenSans'>Select one of the following:</p>
                    <div className='align-items-center mt-2 d-sm-flex justify-content-between'>
                        <div>
                            <input type="radio" name='1' id='one' />
                            <label className='fs_lg fw-normal text_green_50 ff_OpenSans ms-2' htmlFor="one">I am a buyer</label>
                        </div>
                        <div>
                            <input type="radio" name='1' id='two' />
                            <label className='fs_lg fw-normal text_green_50 ff_OpenSans ms-2' htmlFor="two">I am a seller</label>
                        </div>
                        <div>
                            <input type="radio" name='1' id='three' />
                            <label className='fs_lg fw-normal text_green_50 ff_OpenSans ms-2' htmlFor="three">I'm an agent or broker</label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-5'><a className='heroBtn fs_xl fw-bold ff_OpenSans text-white ' href="#">SUBSCRIBE</a></div>
                    <p className='mt-3 fs_xsm fw-normal ff_OpenSans text_green_50 '>I give mana permission to contact me & agree to the  <span className='fw-semibold'>terms</span>.This site is protected by reCAPTCHA and the Google <span className='fw-semibold'>privacy policy</span> & <span className='fw-semibold'> terms of service</span>.</p>
                    <p className='fs_lg text-center fw-normal ff_OpenSans text_green_50 mb-0 pb-5'>Want to chat? <span className='fw-semibold text-decoration-underline'> Contact us</span>.</p>
                </div>
            </Container>
        </div>
    )
}

export default DontMissout