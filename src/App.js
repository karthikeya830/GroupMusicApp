import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import CreateSession from './Components/CreateSession/CreateSession';
import JoinSession from './Components/JoinSession/JoinSession';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/create-session" element={<CreateSession />} ></Route>
          <Route path="/join-session" element={<JoinSession />}></Route>
          <Route path="/login" element={<Login />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;