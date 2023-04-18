import React, { Component,useEffect } from "react";
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
import Students from "./adminboard/students/students";
import EditGroup from "./adminboard/EditGroup/EditGroup";
import Subjects from "./adminboard/subjects/subjects"
import EmailConfirm from "./components/emailConfirm/emailConfirm";
import TeacherHomepage from "./components/teacherHomepage/teacherHomepage";
import Timetable from "./components/timetable/timetable";
import SettingPage from "./components/SettingPage/SettingPage";
import StudentsPage from "./components/studentPageforTeacher/studentsPage"
import componentDidMount from "./services/refresh";
import GroupMarks from "./components/groupMarks/groupMarks";
import Attendance from "./components/attendance/attendance";
import setref from "./services/refresh";
import { withRouter} from 'react-router-dom';
import { redirect } from "react-router-dom";


const API_URL = "https://localhost:7203/";
const refreshInterval = 4 * 60 * 1000
class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: {},
    };
  }

  async componentDidMount() {
    const user = AuthService.getCurrentUser();
    const response = await axios.get(API_URL + 'user/getuser/'+user.id, {
      headers: {
        'accept': '*/*',
        'Authorization':localStorage.getItem('Btoken')
      }
    });
    if (response) {
      console.log(response);
      this.setState({
        currentUser: response.data
      })
    }
    if(response.data.user.role=="Teacher"){
      redirect("/teacherHomepage")
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
      <div onMouseMove={setref}>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin/*" element={<Mainmenu />} />
            <Route path="/homepage/*" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/proposals" element={<ProposalsPage />} />
            <Route path="/account" element={<Account userdata={this.state.currentUser} />} />
            <Route path='/admin/termmenu' element={<Termspage />} />
            <Route path='/admin/groups' element={<Groups />} />
            <Route path='/admin/teachers' element={<Teachers />} />
            <Route path='/admin/students' element={<Students />} />
            <Route path='/admin/subjects' element={<Subjects />} />
            <Route path='/admin/groups/editgroup' element={<EditGroup />} />
            <Route path='/email-confirm' element={<EmailConfirm />} />
            <Route path='/teacherHomepage' element={<TeacherHomepage/>}/>
            <Route path='/timetable' element={<Timetable/>}/>
            <Route path="/settingspage"  element={<SettingPage userdata={this.state.currentUser}/>} />
            <Route path="/studentspage" element={<StudentsPage />} />
            <Route path="/groupMarks" element={<GroupMarks />} />
            <Route path="/attendance" element={<Attendance/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;