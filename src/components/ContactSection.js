import React from 'react';

const ContactSection = ()=>{
    return (
        <section id="contact" className="section-padding min-vh-100" data-aos="zoom-in">
        <div className="container-fluid">
            <div className="row justify-content-center text-center">
                <div className="header">
                    <h1 className="display-1 mb-4">Get In Touch</h1>
                    <small>welcome to brand welcome to brand welcome to brand welcome to brand welcome to brand welcome
                        to brand welcome to brand welcome to brand welcome to brand </small>
                </div>
            </div>
            <div className="row justify-content-center mt-5 ">
                <div className="col-md-9">
                    <div className="contact-form bg-white p-5">
                        <form className="row">
                            <div className="form-group col-6">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group col-6">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>
                            <div className="form-group col-12">
                                <label for="exampleInputEmail1">User Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="User name" />
                            </div>
                            <div className="form-group col-12">
                                <label for="exampleInputEmail1">Message</label>
                                <textarea name="message" className="form-control" placeholder="Enter Message"
                                    rows="5"></textarea>

                            </div>
                            <div className="col-12 d-grid">
                                <button type="submit" className="btn btn-primary mt-5">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default ContactSection