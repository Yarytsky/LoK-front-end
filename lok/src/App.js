import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import AuthService from "./services/auth.service";
import Login from "./components/login/login.component";
import Register from "./components/register/register.component";
import Termspage from "./adminboard/termspage/termspage";
import ProposalsPage from "./components/ProposalsPage/ProposalsPage";
import HomePage from "./components/HomePage/HomePage";
import Diary from "./components/diary/diary";
import Account from "./components/account/account";
import Mainmenu from "./adminboard/mainmenu/mainmenu";
import Groups from "./adminboard/groups/groups";
import Teachers from "./adminboard/teachers/teachers";
import EditGroup from "./adminboard/EditGroup/EditGroup";

const API_URL = "https://localhost:7203/";

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
            <Route path="/admin/*" element={<Mainmenu />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/proposals" element={<ProposalsPage />} />
            <Route path="/account" element={<Account userdata={this.state.currentUser} />} />
            <Route path='/admin/termmenu' element={<Termspage />} />
            <Route path='/admin/groups' element={<Groups />} />
            <Route path='/admin/teachers' element={<Teachers />} />
            <Route path='/admin/groups/editgroup' element={<EditGroup />} />


          </Routes>
        </div>
      </div>
    );
  }
}

export default App;