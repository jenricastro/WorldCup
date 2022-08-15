import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import Homepage from "./components/landingpage/Main";
import MatchView from "./components/MatchView";
import MatchEdit from "./components/MatchEdit";
import MatchForm from "./components/MatchForm";
import MatchAdd from "./components/MatchAdd";
import Login from './user/login/login';
import Register from './user/register/register';



function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("User", JSON.stringify(user))
    setLoginUser(user)
  }

  

  return (
    <div className="App">

      <div class="topnav">
        <a href="/">SignIn</a>
        <a href="/register">Register</a>
        <h3>Welcome {user.name}</h3>
    </div>
    <a className="button-logout" onClick={() => updateUser({})} href="/">Logout</a>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element = {user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element ={<Register />}/>
          <Route path ="/landingpage" element = {<Homepage/>} />
          <Route path ="/react" element = {<MatchView />} />
          <Route path ="/edit/:id" element = {<MatchEdit/>} />
          <Route path ="/view/:id" element = {<MatchForm/>} />
          <Route path = "/create" element ={<MatchAdd/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;