
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
        < Route path='/user' element={<User/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;
