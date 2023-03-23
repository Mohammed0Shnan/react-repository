import React from 'react';

const TeamSection = () => {
    return (
        <section id="team" className="section-padding" data-aos="zoom-in">
            <div className="container">
                <div className="row g-5">
                    <div className="col-4">
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
                    <div className="col-4">
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
                    <div className="col-4">
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