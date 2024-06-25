import { Link, useNavigate } from "react-router-dom";
import "../LandingPage/landingpage.css"
import { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import axios from "axios"
const LandingPage = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [showPassword, setShowPassword] = useState(false);
  let navigator=useNavigate()
  let[users,setUsers]=useState([])
  let uId="";
  useEffect(()=>{
    axios.get("http://localhost:1000/user")
    .then((res)=>{
        setUsers(res.data)
    })
  },[])

     
  function loginFunction(e) {
    let flag=false
    e.preventDefault()
    if(username!='' && password!=''){
       users.map((u)=>{
        if((u.mobileNo==username || u.emailAdd==username) && u.password==password){
          flag=true
          uId=u.id;
        }
       })
    }else{
        alert("provide details")
    }
    if(flag){
        alert("Login Successfull")
        navigator(`/loginpage/${uId}`)
    }else{
        alert("Login failed")
    }
   }



   function createaccoumt(e) {
    e.preventDefault()
    navigator('/userregistration')
   }
     
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="landingpage">
      <div className="lhs">
        <h1>Shop <span>Sera</span></h1>
        <h3>ShopSera,Serene Shopping Haven, Where Blissful Purchases Await You.</h3>
      </div>
      <div className="rhs">
        <form >
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Email address or phone number"
          />
          <div className="passdiv" style={{ position: 'relative' }}>
          <input id="passInp"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            style={{ paddingRight: "40px" }}
          />
          <IconButton id="passIcon" onClick={handleTogglePasswordVisibility}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
          </div>
          <button onClick={loginFunction} id="login">Log in</button>
          <Link to="/forgotpassword">
            <p>Forgotten password?</p>
          </Link>
          <hr />
          <button id="createaccount" onClick={createaccoumt}>Create new account</button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
