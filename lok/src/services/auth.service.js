import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import axios from "axios";

const API_URL = "https://localhost:7203/";

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

  getsmt(){
    return axios.get(API_URL+"getsome")
    .then(resp =>{
      console.log(resp.data)
    })
  }
  logout() {
    localStorage.removeItem("user");
  }

  async register(userName, email, password,phoneNumber,firstName,lastname) {
    let userdata={
      userName,
      email,
      password,
      lastname,
      firstName,
      phoneNumber
    }
    let response = await axios.post(API_URL + "signup",JSON.stringify(userdata))
    let resp = response.data
    return resp
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

  render() {
    return(
      <div>
        <button onClick={this.getsmt}>ok</button>
      </div>
    )
  }
  
}

export default new AuthService();