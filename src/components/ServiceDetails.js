import { useParams } from "react-router-dom"
import localdata from "../data/services";
import Aos from "aos";
import { useEffect } from "react";

export const ServiceDetails = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const { serviceId } = useParams()
    // const { isLoading, data, isError, error } = useServiceDetails(serviceId)

    // if(isLoading){
    //     return <h2>Loading...</h2>

    // }
    // if(isError){
    //     return <h2>{error.message}</h2>
    // }

    const service = localdata.find(element => element.id == serviceId)

    return (
        <div className="service-detail min-vh-100 d-flex  align-items-center">
            
            <div className="container">
                <div className="row gx-5 gy-3 justify-content-center  align-items-center m-2">
                    <div className="col-lg-6 col-sm-12" data-aos="fade-right" >
                        <img src={require('../img/' + service.img)} />
                    </div>
                    <div className="col-lg-6 col-sm-12 " data-aos="fade-left">
                        <div className="service-title">
                            <h3>{service.title}</h3>
                        </div>
                        <div className="service-description mt-4">
                            <h5>{service.description}</h5>
                        </div>

                    </div>
            </div>
            </div>
        </div>

    )
}
