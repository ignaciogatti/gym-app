import axios from 'axios';

export default axios.create({
    baseURL:'https://gym-server.rj.r.appspot.com/api'
    //baseURL: 'http://localhost:3001/api'
});