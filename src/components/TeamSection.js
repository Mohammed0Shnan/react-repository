import React from 'react';

const TeamSection = () => {
    return (
        <section id="team" className="section-padding" data-aos="zoom-in">
            <div className="container">
            <div className="row mb-5 ">
                    <div className="col-12 text-center">
                        <div className="team-title">
                            <h1 className="display-3 mb-4">Out Team</h1>
                            <div className="line mb-4"></div>
                           
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="team-card">
                            <div className="img-wrapper">
                                <div className='img bg-cover'></div>
                            </div>

                            <div className=" team-info text-center align-items-center justify-content-center">
                                <h1> Title </h1>
                                <small>sub title</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="team-card">
                            <div className="img-wrapper">
                                <div className='img bg-cover'></div>
                            </div>

                            <div className=" team-info text-center align-items-center justify-content-center">
                                <h1> Title </h1>
                                <small>sub title</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="team-card">
                            <div className="img-wrapper">
                                <div className='img bg-cover'></div>
                            </div>

                            <div className=" team-info text-center align-items-center justify-content-center">
                                <h1> Title </h1>
                                <small>sub title</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default TeamSection