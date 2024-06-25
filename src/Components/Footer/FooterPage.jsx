import {Link} from "react-router-dom"
import "../Footer/footerpage.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
const FooterPage = () => {
    return ( 
        <div className="footerpage">
             <div className="footerTop">
                <div className="footerbox">
                <h1>Shop <span>Sera</span></h1>
                <p>#shopsera company</p>
                </div>
                <div className="footerbox">
                    <Link >WEEBLY THEMES</Link>
                    <Link>PRE-SALE FAQS</Link>
                    <Link>SUBMIT ATICKET</Link>
                </div>
                <div className="footerbox">
                    <Link >SERVICES</Link>
                    <Link>THEME TWEAK</Link>
                </div>
                <div className="footerbox">
                    <Link >SHOWCASE</Link>
                    <Link>WIDGETKIT</Link>
                    <Link>SUPPORT</Link>
                </div>
                <div className="footerbox">
                    <Link >ABOUT US</Link>
                    <Link>CONTCAT US</Link>
                    <Link>RESOURCES</Link>
                </div>
             </div>
             <div className="footerbotm">
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
                <PinterestIcon/>
                <GoogleIcon/>
             </div>
        </div>
     );
}
 
export default FooterPage;