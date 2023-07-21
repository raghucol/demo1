import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000

})

export const fetchData = async (endpoint) => {
    try {
        const response = await apiService.get(endpoint);
        return response.data;
    } catch(error) {
        return error;
    }
}

