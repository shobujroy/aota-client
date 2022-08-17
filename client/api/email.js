import axios from 'axios';
// base url for the api
const baseUrl = 'https://api.aliensontheave.com';

export const emailSub = (email) => {
    return axios.post(`${baseUrl}/api/subscribe/email`, email);
}