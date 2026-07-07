import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './conponents/Navbar'
import Manager from './conponents/Manager'
import NotUser from './conponents/notUser'
import Login from './conponents/Login'

function App() {
  const [count, setCount] = useState(0)
  const [isValidUser, setisValidUser] = useState(false)
  const [login, setlogin] = useState({user:"" , password:""})
  const [falseuser, setfalseuser] = useState(false)
  const handleloginchange = (e) =>{
    setlogin({...login , [e.target.name]:e.target.value})
  }
  const handlelogin = (e) =>{
    let logininfo = localStorage.getItem("logininfo")
    // console.log(login)
    // console.log(logininfo)
    if (!logininfo){
      localStorage.setItem("logininfo", JSON.stringify(login))
      setisValidUser(true)
    }
    else{
      const userSaved= JSON.parse(logininfo)
      const validate= ((userSaved.user===login.user)&&(userSaved.password===login.password))
      console.log(validate)
      if (validate){
        setisValidUser(validate)
      }
      else{
        setfalseuser(true)
      }
    }
  }

  return (
    <>
      {/* <Navbar/> */}
      
     {isValidUser?<Manager />:<Login login={login} handleloginchange={handleloginchange} handlelogin={handlelogin} falseuser={falseuser} />}
    </>
  )
}

export default App
