import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5689709c8d724599a9f487e6078e4db0'
    }
})