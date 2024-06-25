import FooterPage from "../../../Footer/FooterPage";
import NavBar from "../NavBar";
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "../ContectUs/contectus.css"
import ContactForm from "../../../ContactForm/ContactForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ContectUs = () => {
  let params=useParams()
  return (
    <div className="contectus">
      <NavBar id={params.id}/>
      <div className="contop">
        <h1>#Let's_talk</h1>
        <p>LEAVE A MESSAGE,We Love To Hear From You!</p>
      </div>
      <div className="contectmap">
        <div className="leftmap">
            <h4>GET IN TOUCH</h4>
            <h2>Visite one of our agency locations or contact us today</h2>
            <div className="mapbox">
                <MapIcon/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="mapbox">
                <EmailIcon/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="mapbox">
                <PhoneIcon/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="mapbox">
                <WatchLaterIcon/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34233.58414083382!2d77.60035229295619!3d12.9745283291197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1713761545076!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      <ContactForm/>
      <FooterPage />
    </div>
  );
};

export default ContectUs;
