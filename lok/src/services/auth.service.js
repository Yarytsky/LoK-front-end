import axios from "axios";

const API_URL = "http://localhost:7203/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      }).catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })
    
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(userName, email, password,phoneNumber,firstName,lastname) {
    return axios.post(API_URL + "signup", {
      userName,
      email,
      password,
      lastname,
      firstName,
      phoneNumber
    }).catch(error => {
      if (!error.response) {
          // network error
          this.errorStatus = 'Error: Network Error';
      } else {
          this.errorStatus = error.response.data.message;
      }
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();