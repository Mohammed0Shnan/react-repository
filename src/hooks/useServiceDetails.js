import { useQuery } from "react-query"
import axios from "axios"

const fetchServiceDetail = (serviceId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${serviceId}`)
    
}

export const useServiceDetails = (serviceId) => {
    return useQuery(['service', serviceId], () => fetchServiceDetail(serviceId))
}

