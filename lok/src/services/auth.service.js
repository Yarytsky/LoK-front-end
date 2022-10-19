import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import axios from "axios";

const API_URL = "http://localhost:7203/";

class AuthService {
  login(username, password) {
    return axios
      .put(API_URL + "signin", {
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
    let userdata={
      userName,
      email,
      password,
      lastname,
      firstName,
      phoneNumber
    }
    return axios.post(API_URL + "signup", userdata)
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error => {
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