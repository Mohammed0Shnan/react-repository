import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
const ServicesSection = () => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <div className='modal-dialog'>
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                        {props.message}
                        </p>
                    </Modal.Body>
                    <Modal.Footer >
                        <a className='btn' onClick={props.onHide} ><h6>Close</h6></a>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }


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


    const localdata = [
        {
            id: 1,
            title: 'Websites and online stores',
            description: 'At Creative Agency, we have long experience in server systems, websites hosting, and programming languages, so we offer you what is right for your business',
            img: 'comp.png'
        },
        {
            id: 2,
            title: 'Mobile applications Design and development(android and Iphone)',
            description: 'ddsdescription',
            img: 'mobile .png'
        },

        {
            id: 3,
            title: 'SMS Marketing',
            description: 'ddsdescription',
            img: 'sms .png'
        },
        {
            id: 4,
            title: 'Identity designing (logo branding)',
            description: 'ddsdescription',
            img: 'comp.png'
        },
        {
            id: 5,
            title: 'SM Management & ADS Campaign',
            description: 'ddsdescription',
            img: 'ads.png'
        },
        {
            id: 6,
            title: 'Printing',
            description: 'ddsdescription',
            img: 'print.png'
        },
        {
            id: 7,
            title: 'Packaging products (Paperbags - carton Boxes)',
            description: 'ddsdescription',
            img: 'carton.png'
        },
        {
            id: 8,
            title: 'Gift item',
            description: 'ddsdescription',
            img: 'gift 2.png'
        },
        {
            id: 9,
            title: 'Uniform',
            description: 'ddsdescription',
            img: 'T .png'
        },
    ]


    return (
        <section id="services" className="section-padding border-top " data-aos="zoom-in">
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
                    {
                        localdata.map(service => {
                            return <div className="col-lg-4 col-md-6 col-sm-12">
                                <button  onClick={() => setModalShow(true )} >
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
           
                                </button>
                                <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                message='kkkkkkkkkkkkkkkkkkkkk'
            />
                            </div>
                        })
                    }

                </div>
            </div>
         
        </section>


    );



}

export default ServicesSection

