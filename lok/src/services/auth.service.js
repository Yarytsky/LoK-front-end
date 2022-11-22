import { isLabelWithInternallyDisabledControl, wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

const API_URL = "https://localhost:7203/";
class AuthService {
  async login(UserName, Password) {
    return await axios
      .post(API_URL + "signin", {
        UserName,
        Password
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

  getsmt(){
    return axios.get(API_URL+"getsome")
    .then(resp =>{
      console.log(resp.data)
    })
  }
  logout() {
    localStorage.removeItem("user");
  }

  async register(UserName, Email, Password,PhoneNumber,FirstName,Lastname,Gender,Country) {
    let userdata={
      UserName,
      Email,
      Password,
      Lastname,
      FirstName,
      PhoneNumber,
      Country,
      Gender
    }
    return await axios.post(API_URL + "signup",userdata)
   
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
    return JSON.parse(localStorage.getItem('user'));;
  }
  
}

export default new AuthService();