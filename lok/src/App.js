import React, { Component } from "react";
import { Routes, Route, Link, UNSAFE_DataRouterContext } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import AuthService from "./services/auth.service";
import Login from "./components/login/login.component";
import Register from "./components/register/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProposalsPage from "./components/ProposalsPage/ProposalsPage";
import HomePage from "./components/HomePage/HomePage";
import Diary from "./components/diary/diary";
import Account from "./components/account/account";

const user = AuthService.getCurrentUser();
const API_URL = "https://lakeofknolage.azurewebsites.net/";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  async componentDidMount() {
    const user = AuthService.getCurrentUser();
    const response = await axios.get(API_URL + "user/getuser/" + user.id);
    if (response) {
      this.setState({
        currentUser: response.data,
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {

    return (
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/proposals" element={<ProposalsPage />} />
            <Route path="/account" element={<Account userdata={this.state.currentUser} />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;