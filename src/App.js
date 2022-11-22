import Login from './Components/Auth/Login'
import Home from './Components/Home'
import HomeStudent from './Components/HomeStudent'
import RegisterAttendance from './Components/RegisterAttendance'
import SearchForAttendanceRegister from './Components/SearchForAttendanceRegister'
import ViewAttendance from './Components/ViewAttendance'
import SeachForAStudent from './Components/SearchForAStudent'
import LoginScreen from './Components/LoginScreen'
import './resources/styles/App.scss';
import List from "./Components/List";
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './Components/Auth/PrivateRoute';

import User from './Components/User';

import Navigation from './Components/Navigation';

function App() {
  return (
    <Navigation />
  );
}
export default App;