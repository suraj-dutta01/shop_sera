import { Route, Routes, useParams } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import HeroImg from "./Hero/HeroImg";
import ProfilePage from "./NavBar/Profile/ProfilePage";

const LoginPage = () => {
    let parm=useParams()
    return ( 
        <div className="">
            <NavBar id={parm.id} />
            <HeroImg/>
        </div>
     );
}
 
export default LoginPage;