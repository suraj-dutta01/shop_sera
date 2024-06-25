import { useEffect, useState } from 'react';
import '../RegistrationPage/registrationpage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const RegistrationPage = () => {
    let[fName,setFname]=useState("")
    let[sName,setSname]=useState("")
    let[mobileNo,setMobileNo]=useState("")
    let[emailAdd,setEmailadd]=useState("")
    let[password,setPassword]=useState("")
    let[dob,setDob]=useState("")
    let[gender,setGender]=useState("")
    let data={fName,sName,mobileNo,emailAdd,password,dob,gender}
    let navigator=useNavigate()
    let [showPassword, setShowPassword] = useState(false);
    let[users,setUsers]=useState([])
    let flag=true
    useEffect(()=>{
      axios.get("http://localhost:1000/user")
      .then((res)=>{
        setUsers(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])
    users.map((e)=>{
        if(e.mobileNo==mobileNo || e.emailAdd==emailAdd){
            flag=false
        }
    })
    function registerUser(e){
        e.preventDefault()
        if(fName!="" && sName!="" && mobileNo!="" && emailAdd!="" && password!="" && dob!="" && gender!="" && flag){
            axios.post("http://localhost:1000/user",data)
            .then((res)=>{
                alert("registration successfull")
                navigator('/')
              })
              .catch((err)=>{
                console.log(err);
              })
        }
        else{
            alert("please provide valid detailse")
        }
    }
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return ( 
        <div className="registrationpage">
            <div className="registrationbox">
                <div className="topbar">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                    <hr />
                </div>
                <div className="formsection">
                    <form onSubmit={registerUser}>
                        <div className="name">
                            <input type="text" placeholder='First name' value={fName} onChange={(e)=>{setFname(e.target.value)}} />
                            <input type="text" placeholder='Surname' value={sName}  onChange={(e)=>{setSname(e.target.value)}}/>
                        </div>
                        <input type="tel" placeholder='Mobile number' value={mobileNo}  onChange={(e)=>{setMobileNo(e.target.value)}} />
                        <input type="text" placeholder='Email address' value={emailAdd}  onChange={(e)=>{setEmailadd(e.target.value)}}/>
                        <div className="passwordset">
                        <input  placeholder='Set Password' value={password}  onChange={(e)=>{setPassword(e.target.value)}}
                        type={showPassword ? "text" : "password"}/>
                        <IconButton id="passIconReg" onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                        </div>
                        <input type="date" id='inpdate' value={dob} onChange={(e)=>{setDob(e.target.value)}} />
                        <div className="genderboxces" >
                            <div className="genderbox">
                                Female <input type="radio" name='gender' value='female' checked={gender==='female'} onChange={(e)=>{setGender(e.target.value)}}/>
                            </div>
                            <div className="genderbox">
                                Male <input type="radio" name='gender' value='male' checked={gender==='male'}  onChange={(e)=>{setGender(e.target.value)}}/>
                            </div>
                            <div className="genderbox">
                                Other <input type="radio" name='gender' value='other' checked={gender==='other'}  onChange={(e)=>{setGender(e.target.value)}}/>
                            </div>
                        </div>
                        <p>Embrace the Possibilities: Your Contacts May Already Be Part of the ShopSera Community. Join Today!</p>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default RegistrationPage;