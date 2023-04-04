import axios from "axios";
import jwt_decode from "jwt-decode"; 



const API_URL = "https://lokserver.azurewebsites.net/";
class AuthService {
  async login(PhoneOrEmail, Password) {
    return await axios
      .post(API_URL + "auth/signin", {
        PhoneOrEmail,
        Password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("token",response)
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

  updateUser(){
    
  }
  logout() {
    localStorage.removeItem("user");
  }

  async register(email, password,phoneNumber,firstName,lastname,Gender,Country,role) {
    let userdata={
      email,
      password,
      lastname,
      firstName,
      phoneNumber,
      Gender,
      Country,
      role
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
