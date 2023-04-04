import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top  p-5">
                <div className="container">
                    <div className="row gy-5 justify-content-center text-center text-lg-start text-md-start ">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <a className="navbar-brand " href="#"></a>
                            <p className="mt-2"> brands we love to crafit degital expperiances for brands brands we love to
                                crafit degital expperiances for brands</p>
                            {/* <div className="social-links ">
                                <a href="">F</a>
                                <a href="">T</a>
                                <a href="">W</a>
                                <a href="">I</a>
                            </div> */}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <h5 className='mt-2'>SERVICES</h5>
                            <div className="line "></div>
                            <ul className="">
                                <li>
                                    <a href="">UI Designer</a>
                                </li>
                                <li>
                                    <a href="">UX Designer</a>
                                </li>
                                <li>
                                    <a href="">Branding</a>
                                </li>
                                <li>
                                    <a href="">Logo</a>
                                </li>


                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5 className='mt-2'>ABOUT</h5>
                            <div className="line"></div>
                            <ul className="">
                                <li>
                                    <a href="">UI Designer</a>
                                </li>
                                <li>
                                    <a href="">UX Designer</a>
                                </li>
                                <li>
                                    <a href="">Branding</a>
                                </li>
                                <li>
                                    <a href="">Logo</a>
                                </li>


                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5 className='mt-2'>CONTACT</h5>
                            <div className="line"></div>
                            <ul className="">
                                <li>
                                    <a href="">UI Designer</a>
                                </li>
                                <li>
                                    <a href="">UX Designer</a>
                                </li>
                                <li>
                                    <a href="">Branding</a>
                                </li>
                                <li>
                                    <a href="">Logo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row justify-content-between align-items-center g-4  text-center text-lg-start">
                        <div className="col-md-auto col-sm-12">
                            <p className="mb-0"> @Copyright Brand All Rights Reserved</p>
                        </div>
                        <div className="col-md-auto col-sm-12">
                            <p className="mb-0">Desined By Name</p>

                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer