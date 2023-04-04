import { useQuery } from "react-query"
import axios from "axios"
import localdata from "../data/services";

const fetchServiceDetail = (serviceId) => {
 
   return axios.get(`https://jsonplaceholder.typicode.com/posts/${serviceId}`)
    
}

export const useServiceDetails = (serviceId) => {
    return useQuery(['service', serviceId], () => fetchServiceDetail(serviceId))
}

