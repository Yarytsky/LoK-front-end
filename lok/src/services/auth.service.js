import { isLabelWithInternallyDisabledControl, wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import jwt_decode from "jwt-decode"; 



const API_URL = "https://localhost:7203/";
class AuthService {
  async login(usernameOrEmail, Password) {
    return await axios
      .post(API_URL + "auth/signin", {
        usernameOrEmail,
        Password
      })
      .then(response => {
        if (response.data.accessToken) {
          var decoded = jwt_decode(response.data.accessToken)
          localStorage.setItem("user", JSON.stringify(decoded))

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

  async register(Email, Password,PhoneNumber,FirstName,Lastname,Gender,Country) {
    let userdata={
      Email,
      Password,
      Lastname,
      FirstName,
      PhoneNumber,
      Country,
      Gender
    }
    return await axios.post(API_URL + "auth/signup", userdata)
    .then(response=>response.data)
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
   return JSON.parse(localStorage.getItem('user'));    
  }
  
}

export default new AuthService();
