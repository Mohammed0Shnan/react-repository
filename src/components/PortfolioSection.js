import React from 'react';

const PortolioSection = () => {
    return (
    <section id="portfolio" className="section-padding"  data-aos="zoom-in">
        <div className="container">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3 mb-4">Portfolio</h1>
                        <div className="line mb-4"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="portfolio-card">
                        <div className="image-zoom">
                            <div className='portfolio-img bg-cover'></div>
                        </div>
                        <div className="icon-box">

                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="portfolio-card">
                        <div className="image-zoom">
                            <div className='portfolio-img bg-cover'></div>
                        </div>
                        <div className="icon-box">

                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="portfolio-card">
                        <div className="image-zoom">
                            <div className='portfolio-img bg-cover'></div>
                        </div>
                        <div className="icon-box">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}



export default PortolioSection