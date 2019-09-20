import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cacffa66c2846ef57a79d530cc918ee0c604dcb5cd5eea7f4dbea2eca5dbeac1'
    }
});