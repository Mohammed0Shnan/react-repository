import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom'

const ServicesSection = () => {

    const onSuccess = (data) => {
        console.log('Success Call Back', data)
    }
    const onError = (error) => {
        console.log('Error Call Back', error)
    }

    const { isLoading, data, isError, error, isFetching } = useQuery('services', () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },

        //After 5 seconds,
        // if there is no observer, the cache will be cleared
        {
            cacheTime: 5000,
            onSuccess,
            onError
        })

    if (isLoading || isFetching) {
        return (<h2>Loading... </h2>);
    }
    if (isError)
        return (<h2>{error.message}</h2>);
    return (
        <section id="services" className="section-padding border-top" data-aos="zoom-in">
            <div className="container">
                <div className="row mb-5 ">
                    <div className="col-12 text-center">
                        <div className="services-title">
                            <h1 className="display-3 mb-4">Services</h1>
                            <div className="line mb-4"></div>
                
                        </div>
                    </div>
                </div>
                <div className="row gy-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card ">
                            <div className="wrapper">
                                <div className="icon-box"></div>
                                <h1 className="mt-3">Service Name</h1>
                                <p className="mt-3">description</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card ">
                            <div className="wrapper">
                                <div className="icon-box"></div>
                                <h1 className="mt-3">Service Name</h1>
                                <p className="mt-3">description</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card ">
                            <div className="wrapper">
                                <div className="icon-box"></div>
                                <h1 className="mt-3">Service Name</h1>
                                <p className="mt-3">description</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card ">
                            <div className="wrapper">
                                <div className="icon-box"></div>
                                <h1 className="mt-3">Service Name</h1>
                                <p className="mt-3">description</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card ">
                            <div className="wrapper">
                                <div className="icon-box"></div>
                                <h1 className="mt-3">Service Name</h1>
                                <p className="mt-3">description</p>
                            </div>
                        </div>
                    </div>

                    {/* {
                        data?.data.map(service => {
                            return <div key={service.id} className="col-lg-4 col-md-6 col-sm-12">
                                <Link to={`/service-details/${service.id}`} >
                                    <div className="service-card">
                                        <div className="wrapper">
                                            <div className="icon-box"></div>
                                            <h1 className="mt-3">Service Name</h1>
                                            <p className="mt-3"> {service.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })
                    } */}

                </div>
            </div>
        </section>
    );

}

export default ServicesSection

