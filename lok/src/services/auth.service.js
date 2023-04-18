import axios from "axios";
import jwt_decode from "jwt-decode";
import { Routes, Route, Link, Navigate } from "react-router-dom";


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
          var token = response.data.accessToken
          localStorage.setItem("Btoken", "Bearer " + token)
          localStorage.setItem("atoken", response.data.accessToken)
          localStorage.setItem("rtoken", response.data.refreshToken)
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

  updateUser() {

  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("Btoken");
    localStorage.removeItem("atoken");
    localStorage.removeItem("rtoken");
  }

  async register(email, password, phoneNumber, firstName, lastname, Gender, Country, role) {
    let userdata = {
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
      .then(response => response.data)
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

  componentDidMount = async () => {
    const refreshInterval = 4 * 60 * 1000
    localStorage.setItem('expirationTime', refreshInterval);
    const expirationTime = localStorage.getItem('expirationTime');
    const currentTime = new Date().getTime() / 1000;

    if (currentTime > expirationTime - 240) { // Refresh token if it's about to expire in 5 minutes
      try {
        return await axios.post(API_URL + 'auth/refreshtoken', {
          "token": localStorage.getItem('atoken'),
          "refreshToken": localStorage.getItem('rtoken')
        }).then(response => {
          if (response.data.accessToken) {
            var token = response.data.accessToken
            localStorage.setItem("Btoken", "Bearer " + token)
            localStorage.setItem("atoken", response.data.accessToken)
            localStorage.setItem("rtoken", response.data.refreshToken)
            localStorage.setItem('expirationTime', refreshInterval);
          }

          return response.data;
        })
      } catch (error) {
        // Handle error
      }
    }
  };

}



export default new AuthService();
