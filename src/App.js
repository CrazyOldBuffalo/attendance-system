import Login from './Components/Auth/Login'
import Home from './Components/Home'
import './resources/styles/App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivateRoute from './Components/Auth/PrivateRoute';

import User from './Components/User'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <User />

      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>} /> 
          <Route path='/Home' element={<Home/>} />
        </Routes>
      </Router>

      
    </div>
  );
}
export default App;