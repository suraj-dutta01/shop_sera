import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import User from "../Profile/User.png"
import "../Profile/profilepage.css"
import { useEffect, useState } from "react";
import axios from "axios";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CloseIcon from '@mui/icons-material/Close';
const ProfilePage = () => {
    let parm=useParams()
    let[fName,setFname]=useState("")
    let[sName,setSname]=useState("")
    let[mobileNo,setMobileNo]=useState("")
    let[emailAdd,setEmailadd]=useState("")
    let[password,setPassword]=useState("")
    let[addresses,setAddresess]=useState([])
    let[dob,setDob]=useState("")
    let[gender,setGender]=useState("")
    let[userDp,setUserDp]=useState(User)
    //----------------------------------------------------------
    let[isOpen,setIsOpen]=useState(false)
    let[name,setName]=useState("")
    let[phoneNo,setPhoneNo]=useState("")
    let[line1,setLine1]=useState("")
    let[line2,setLine2]=useState("")
    let[pincode,setPincode]=useState("")
    let[district,setDistrict]=useState("")
    let[city,setCity]=useState("")
    let[state,setState]=useState("")
    //-------------------------------------------------
    let[isDpOpen,setIsDpOpen]=useState(false)
    let[openUpdate,setOpenUpdate]=useState(false)
    useEffect(()=>{
     axios.get(`http://localhost:1000/user/${parm.id}`)
     .then((res)=>{
        setFname(res.data.fName)
        setSname(res.data.sName)
        setMobileNo(res.data.mobileNo)
        setEmailadd(res.data.emailAdd)
        setPassword(res.data.password)
        setDob(res.data.dob)
        setGender(res.data.gender)
        if(res.data.addresses!=null){
        setAddresess(res.data.addresses)
        }
        if(res.data.userDp!=null){
        setUserDp(res.data.userDp)
        }
     })
     .catch((err)=>{
        console.log(err);
     })
    },[])
    function openAddAddress() {
        setIsOpen(true)
    }
    function closeAddAddress() {
        // Create a new address object with the current values
        let newAddress = {
            name: name,
            phoneNo: phoneNo,
            line1: line1,
            line2: line2,
            pincode: pincode,
            district: district,
            city: city,
            state: state
        };
    
        // Update the addresses array by adding the new address
        let updatedAddresses = [...addresses, newAddress];
        setAddresess(updatedAddresses);
    
        // Prepare the updated user data object with the new addresses array
        let updatedUserData = {
            fName: fName,
            sName: sName,
            mobileNo: mobileNo,
            emailAdd: emailAdd,
            password: password,
            dob: dob,
            gender: gender,
            addresses: updatedAddresses // Update addresses in the user data
        };
    
        // Send a PUT request to update the user data on the server
        axios.put(`http://localhost:1000/user/${parm.id}`, updatedUserData)
        .then((res) => {
            alert("Address added successfully");
            setIsOpen(false); // Close the address popup
        })
        .catch((err) => {
            console.error("Error adding address:", err);
        });
    }
    function closeAdd() {
        setIsOpen(false);
    }
    function openAddProfilePhoto() {
        setIsDpOpen(true)
    }
    function closeAddProfilePhoto() {
        let data={fName,sName,mobileNo,emailAdd,password,dob,gender,addresses,userDp}
        axios.put(`http://localhost:1000/user/${parm.id}`,data)
        .then((res)=>{
            alert("photo uplode successfull")
            setIsDpOpen(false)
        })
    }
    function closeAddDp() {
        setIsDpOpen(false)
    }
    function openUpdatePopup() {
        setOpenUpdate(true)
    }
    function closeUpdatePopup() {
        let data={fName,sName,mobileNo,emailAdd,password,dob,gender,addresses,userDp}
        axios.put(`http://localhost:1000/user/${parm.id}`,data)
        .then((res)=>{
            alert("Update successfull")
            setOpenUpdate(false)
        })
    }
    function closeUpdate() {
        setOpenUpdate(false)
    }
    return ( 
        <>
        {openUpdate && (
            <div className="updateparent">
                <CloseIcon onClick={closeUpdate} id="closeUpdate"/>
                <div className="update">
                        <input type="text" value={fName} onChange={(e)=>setFname(e.target.value)} placeholder="first name"/>
                        <input type="text" value={sName} onChange={(e)=>setSname(e.target.value)} placeholder="last name" />
                        <input type="tel" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="mobile no"/>
                        <input type="email" value={emailAdd} onChange={(e)=>setEmailadd(e.target.value)} placeholder="email address"/>
                        <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} placeholder="DOB" />
                        <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="gender" />
                        <button onClick={closeUpdatePopup}>save</button>
                </div>

            </div>
        )}
        {isDpOpen &&(
            <div className="adddpparent">
                <CloseIcon onClick={closeAddDp} id="closeAddDp"/>
                <div className="adddp">
                <input type="text" value={userDp} onChange={(e)=>{setUserDp(e.target.value)}} placeholder="enter photo url" />
                <button onClick={closeAddProfilePhoto}>Uplode</button>
                </div>
            </div>
        )}
        {isOpen && (
            <div className="addresspopupscreen">
             <CloseIcon onClick={closeAdd} id="closeAdd"/>
            <div className="addresspopup">
             <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="name"/>
             <input type="tel" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} placeholder="mobile no number"/>
             <input type="text" value={line1} onChange={(e)=>{setLine1(e.target.value)}} placeholder="Line1" />
             <input type="text" value={line2} onChange={(e)=>{setLine2(e.target.value)}} placeholder="Line2" />
             <div className="addbox1">
                <input type="number" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} placeholder="Pincode"/>
                <input type="text" value={district} onChange={(e)=>{setDistrict(e.target.value)}} placeholder="District"/>
             </div>
             <div className="addbox1">
                <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="city"/>
                <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} placeholder="state"/>
             </div>
             <button id="myLocation">My Location <MyLocationIcon id="myLocationIcon"/> </button>
             <button onClick={closeAddAddress}>add address</button>
                </div>
            </div>
        )}
        <NavBar id={parm.id}/>
        <div className="profilepage">
           <div className="profLeft">
            <img src={userDp} alt="User" onClick={openAddProfilePhoto} />
            <h3>{`${fName} ${sName}`}</h3>
            <h4>{mobileNo}</h4>
            <button onClick={openAddAddress}>add address</button>
            </div> 
           <div className="profMid">
                <h3>{`Name: ${fName} ${sName}`}</h3>
                <h3>{`Email: ${emailAdd}`}</h3>
                <h3>{`Phone: ${mobileNo}`}</h3>
                <h3>{`Gender: ${gender}`}</h3>
                <h3>{`DOB: ${dob}`}</h3>
                <button onClick={openUpdatePopup}>Update</button>
           </div>
        </div>
        </>
     );
}
 
export default ProfilePage;