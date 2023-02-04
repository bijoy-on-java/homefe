import axios from "axios";

class LoginService {

    getLoginUsers() {
        return axios.get('http://localhost:1010/login/users')
    }
}

export default new LoginService()