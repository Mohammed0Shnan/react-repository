import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className=" min-vh-100" data-aos="zoom-in">
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <div className="header mb-4">
                        <h3 className="display-3 mb-4">Contact us</h3>

                    </div>
                </div>
                <div className='row justify-content-center align-items-center '>
                    <div className='col-lg-8'>
                        <div className='contact-form'>
                            <div className='row justify-content-center align-items-center '>
                                <div className='col-lg-6'>
                                    <div className='contact-form-img'></div>
                                </div>
                                <div className='col-lg-6 '>
                                    <div className='contact-form-info'>
                                        <h4>Let's drive your business to success.</h4>
                                        <div className='mt-3 mb-3'>
                                            <div>
                                                <span><i class="ri-mail-line"></i></span>
                                                <span>email@gmail.com</span>
                                            </div>
                                            <div>
                                                <span><i class="ri-phone-line"></i></span>
                                                <span>+971 5553 22233</span>
                                            </div>
                                            <div>
                                                <span><i class="ri-map-pin-line"></i></span>
                                                <span>Street: street name , city ,adminstr</span>
                                            </div>
                                        </div>
                                        <a className='btn contact-form-button'>
                                            contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default ContactSection

