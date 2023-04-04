import Aos from 'aos';
import React, { useEffect } from 'react'
const AboutSection = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (

        <section id="about" className="section-padding" data-aos="fade-up">
            <div className="container">
                <div className="row mb-5 " data-aos="fade-down" data-aos-duration="700">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h1 className="display-3 mb-4">About Us</h1>
                            <div className="line mb-4"></div>
                            <p>A company specialized in marketing consulting, Established with highly experienced professionals in the field of marketing consulting, To serve customers professionally to succeed their business.Our story in “Creative Agency” saw the light many years ago to emerge in an integrated reality of success; an agency specialized in Marketing Consulting, Advertising Services and Web Design.As the name suggests, Creativity is the result of joint efforts between various tasks and the result of professional work involving a group of skillful programmers and designers and an innovative media team.</p>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-between">
                    <div className="col-lg-6 col-sm-12" data-aos="fade-right" data-aos-duration="700" >
                        <div className="about-img "></div>
                    </div>

                    <div className="col-lg-5 col-sm-12" data-aos="fade-left" data-aos-duration="700">

                        {/* <div className="about-body mt-2">
                            <h1 className="display-3 mb-2">ABOUT BRAND</h1>
                            <p className="mb-4">we love to crafit degital expperiances for brands we love to crafit degital
                                expperiances for brands </p>
                        </div> */}

                        <div className="about-box d-flex">
                            {/* <div className="iconbox"></div> */}
                            <div>
                                <h5>OUR Vision</h5>
                                <p>We do not only provide technical and marketing services to ourcustomers, but we provide them with values that suit the needs of technology and marketing trends, to achieve unprecedented success.</p>
                            </div>
                        </div>
                        <div className="about-box d-flex">
                            {/* <div className="iconbox"></div> */}
                            <div>
                                <h5>OUR MISSION</h5>
                                <p>We keep pace with everything new in the world of advertising and technology to raise your brand name to the largest number of potential customers for your company</p>
                            </div>
                        </div>
                        <div className="about-box d-flex mt-2">
                            {/* <div className="iconbox"></div> */}
                            <div>
                                <h5>OUR VALUE </h5>
                                <p>- Creative innovation</p>
                                <p>- Team cooperation</p>
                                <p>- Commitment</p>
                                <p>- Leadership</p>
                                <p>- Customers satisfaction</p>
                                <p>- Development</p>
                                <p>- Satisfy customers</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default AboutSection









