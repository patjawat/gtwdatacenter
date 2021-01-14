import axios from 'axios';
import Cookies from 'js-cookie'
const token = Cookies.get('token')
axios.defaults.baseURL = process.env.api;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = token;
export default axios;