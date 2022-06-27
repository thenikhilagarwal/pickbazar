import React, {useState, useEffect } from "react";
import './App.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Login from './Component/Main/Login';
import Register from './Component/Main/Register';
import { Route, Routes} from 'react-router-dom'
import ErrorPage from "./Component/Main/ErrorPage";


function App() {

  const [logindata, setloginData] = useState([]);

  const emailValid = () =>{
    const getUser = localStorage.getItem("user_login")

    if(getUser && getUser.length){
      const user = JSON.parse(getUser);
      console.log("email",user);
      setloginData(user);
    }

  }
  useEffect(()=>{
    emailValid();
  }, [])

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          {
            logindata.length === 0 ? <>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              {console.log("1")}
            </> : <><Route path="*" element={<ErrorPage/>}/></>
           }
           <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
