import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import localdata from '../data/services';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const ServicesSection = () => {


    useEffect(() => {
        Aos.init();
    }, []);
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


    const servicesdata = localdata;


    return (
        <section id="services" className="section-padding border-top " >
            <div className="container">
                <div className="row mb-5  " data-aos="zoom-in">
                    <div className="col-12 text-center">
                        <div className="services-title">
                            <h1 className="display-3 mb-4">Services</h1>
                            <div className="line mb-4"></div>

                        </div>
                    </div>
                </div>
                <div className="row gy-5">
                    {
                        servicesdata.map(service => {
                            return <div className="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-in"  data-aos-duration="700">
                                <Link style={{textDecoration: 'none',color:'black' }} to={`/service-details/${service.id}`} >
                                    <div className="service-card ">
                                        <div className="wrapper">
                                            <img src={require('../img/' + service.img)} />
                                            <div className='info'>
                                                <h6 className="mt-2">{service.title}</h6>
                                                <div className='sub-title mt-2'>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        })
                    }
                

                </div>
            </div>

        </section>


    );



}

export default ServicesSection

