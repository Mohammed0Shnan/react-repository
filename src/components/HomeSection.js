import React from 'react'
import Typed from "react-typed";

const HomeSection = () => {
    return (

        <section id="home" className=" min-vh-100 bg-cover d-flex align-items-center section-padding">
            <div className="container">
                <div className="row justify-content-center " >
                    <div className="col-10 text-center align-items-center">
                        <h1 className="display-3 text-uppercase mb-4 " data-aos="flip-left"> welcome to Creative Markting </h1>
                        <Typed
                            className="typed-text text-uppercase "
                            strings={["welcome to brand welcome to brand welcome to brand welcome to brand",]}
                            typeSpeed={60}
                            backSpeed={40}
                        />
                        {/* <h6 className="text-uppercase mb-5"> welcome to brand welcome to brand welcome to brand welcome to brand
                    </h6> */}
                    <div className='mb-5 '></div>
                        <div>
                            <button className="btn btn-brand-submit me-2" type="submit">Get Started</button>
                            <button className="btn btn-brand-contact ms-2" type="submit">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeSection