import React from 'react'
import Typed from "react-typed";

const HomeSection = () => {
    return (

        <section id="home" className=" min-vh-100 bg-cover d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-start " >
                    <div className="col-8  ">
                        <h6 class="title text-uppercase mb-4">welcome to </h6>
                        <h1 className="display-3 text-uppercase mb-5 " data-aos="fade-right"
                        >Creative Markting Consulting</h1>
                        <h5 className="display-3 text-uppercase mb-5 " data-aos="fade-right">
                            <Typed
                                className="typed-text text-uppercase "
                                strings={["welcome to brand welcome to brand welcome to brand welcome to brand",]}
                                typeSpeed={60}
                                backSpeed={40}
                            />
                        </h5>



                        {/* <h6 className="text-uppercase mb-5"> welcome to brand welcome to brand welcome to brand welcome to brand
                    </h6> */}
                        {/* <div className='mb-5 '></div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-auto col-sm-9 m-2'>
                                <button className="btn btn-brand-submit " type="submit">Get Started</button>
                            </div>
                            <div className='col-lg-auto col-sm-9 m-2'>
                                <button className="btn btn-brand-contact " type="submit">Contact Us</button>
                            </div>
                        </div> */}
                    </div>

                </div>
       
            </div>
        </section>
    );
}
export default HomeSection