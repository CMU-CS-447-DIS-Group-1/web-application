import axios from 'axios';
// const API_URL = 'http://restaurant-api.test/api';
const API_URL = 'http://res.khodata.xyz/api';

class APIService {
    chonBan(data) {
        const url = `${API_URL}/select/table`;
        return axios.post(url, data).then(response => response.data);
    }
    getMon() {
        const url = `${API_URL}/dishes`;
        return axios.get(url).then(response => response.data);
    }
    order(tableCode, data) {
        const url = `${API_URL}/select/table/${tableCode}`;
        return axios.post(url, data).then(response => response.data);
    }
    getHoaDon(tableCode) {
        const url = `${API_URL}/select/invoice/${tableCode}`;
        return axios.get(url).then(response => response.data);
    }
}

export default new APIService();