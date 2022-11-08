import Login from './Components/Auth/Login'
import Home from './Components/Home'
import './resources/styles/App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivateRoute from './Components/Auth/PrivateRoute';


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;