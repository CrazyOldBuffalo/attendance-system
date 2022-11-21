import Login from './Components/Auth/Login'
import Home from './Components/Home'
<<<<<<< HEAD
import HomeStudent from './Components/HomeStudent'
import RegisterAttendance from './Components/RegisterAttendance'
import SearchForAttendanceRegister from './Components/SearchForAttendanceRegister'
import ViewAttendance from './Components/ViewAttendance'
import SeachForAStudent from './Components/SearchForAStudent'
import LoginScreen from './Components/LoginScreen'
//import './resources/styles/App.scss';
import { BrowserRouter as Router, Routes, Route,NavLink,Link, useNavigate} from 'react-router-dom';
=======
import './resources/styles/App.scss';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
>>>>>>> master
import PrivateRoute from './Components/Auth/PrivateRoute';
import Navbar from './Components/Navbar'

import User from './Components/User'

function App() {
<<<<<<< HEAD

  let component

  switch(window.location.pathname){

    case"/":

      component = <Home />
      break

    case "/HomeStudent":
      component = <HomeStudent/>
      break

    case "/RegisterAttendance":
      component = <RegisterAttendance/>
      break

     case "/SearchForAStudent":
       component = <SeachForAStudent/>
       break

    case "/SearchForAttendanceRegister":
      component = <SearchForAttendanceRegister/>
      break

    case "/ViewAttendance":
      component = <ViewAttendance/>
      break
    
    case "/LoginScreen":
      component = <LoginScreen/>
      break

  }
 

  
    return(
      <>
     
        <Navbar />
        {component}
        </>

    ) 
 
  
=======
  return (
    <div className="App">

      <h1>App</h1>
      <User />

      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>} /> 
          <Route path='/Home' element={<Home/>} />
        </Routes>
        <Link to={"/Home"}> Home</Link>
      </Router>

      
    </div>
  );
>>>>>>> master
}
export default App;