import {Link, Route, Routes, useParams } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import "../NavBar/navbar.css"
const NavBar = ({id}) => {
    let parms=useParams();
    let uid=parms.id
    console.log(uid);
    return ( 
        <div className="navbar">
           <div className="nevLef">
            <Link to={`/loginpage/${id}`}><h1>Shop <span>Sera</span></h1></Link>
           </div>
           <div className="navMid">
            <Link to="/men-section">MEN</Link>
            <Link to="/women-section">WOMEN</Link>
            <Link to="/kids-section">KID'S</Link>
            <Link to="/catagory-section">CATAGORY</Link>
            <Link to={`/contect-us/${id}`}>CONTECT US</Link>
            <Link to={`/about-page/${id}`}>ABOUT</Link>
            <div className="searchDiv">
                <input type="text" placeholder="Search" />
                <button><SearchIcon/></button>
            </div>
           </div>
           <div className="navRig">
                   <Link to={`/user-profile/${uid}`}><PersonIcon/></Link>
                   <Link to="/user-wishlist"><FavoriteBorderIcon/></Link>
                   <Link to="/user-cart"><ShoppingCartIcon/></Link>
           </div>
        </div>
     );
}
 
export default NavBar;