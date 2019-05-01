import axios from 'axios';

export default axios.create({
    baseURL: 'https://en.wikiquote.org/w/api.php',
    responseType: "json"
});

