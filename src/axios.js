import axios from 'axios';
const instance = axios.create({
    baseURL:'http://localhost:5001/clone-35704/us-central1/api' //API CLOUD FUNCTION URL ENDPOINT
});

export default instance;