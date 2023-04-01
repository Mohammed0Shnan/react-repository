import { useParams } from "react-router-dom"
import { useServiceDetails } from "../hooks/useServiceDetails"

 export const ServiceDetails = ()=>{
    const { serviceId } = useParams()
    const { isLoading, data, isError, error } = useServiceDetails(serviceId)

    if(isLoading){
        return <h2>Loading...</h2>

    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return <div>{data?.data.name} - {data?.data.body}</div>
}
