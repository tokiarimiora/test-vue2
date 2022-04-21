import axios from 'axios';

class UserService {
  API_URL = 'http://localhost:3000/api/v2/agenda/occurrence/1:language=auto'
  constructor() {}

  getAgenda() {
    return axios.get(this.API_URL);
  }
}
export default new UserService();
