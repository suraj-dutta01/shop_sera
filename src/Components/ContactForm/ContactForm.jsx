import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../ContactForm/contactform.css"
const ContactForm = () => {
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[message,setMessage]=useState("")
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      if(name!=="" && email !=="" && message.length >=10){
        emailjs
        .sendForm('service_r9u2je8', 'template_ydp1xi8', form.current, {
          publicKey: 'lmDtb5VPo6_nTlMO6',
        })
        .then(
          () => {
            alert('Message send successfully');
            setMessage("")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      }else{
        alert("give the credentials")
      }
    };
    return ( 
        <div className="contactform">
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" value={name} name="user_name" onChange={(e)=>{setName(e.target.value)}} />
            <label>Email</label>
            <input type="email" value={email} name="user_email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Message</label>
            <textarea name="message"  onChange={(e)=>{setMessage(e.target.value)}} />
            <input id="sendBut" type="submit" value="Send" />
            </form>
        </div>
     );
}
 
export default ContactForm;