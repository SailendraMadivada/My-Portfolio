import { useState } from "react";
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import Whatsapp from '../../assets/whatsapp.png';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png'
import emailjs from '@emailjs/browser';

 const Contact =()=>{
    var[state,setstate]=useState({
        to_name:'',
        to_email:'',
        message:''
    })

   

    function gethandlecall(e){
       setstate({
        ...state,
        [e.target.name]:e.target.value
       })
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .send('service_rnv3h8v', 'template_5xbv55j',state, {
            publicKey: 'lQmuc0c98I8ukDGqL',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('message sent successfully');
              setstate({
                to_name:'',
                to_email:'',
                message:''
            })

            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      };
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Fill out the form below to contact me</span>
                <form className="contactForm"  onSubmit={sendEmail}>
                    <input type="text" className="name"placeholder="Your Name" value={state.to_name} name="to_name" onChange={gethandlecall}/>
                    <input type="email" className="email" placeholder="Your Email"  value={state.to_email}name="to_email" onChange={gethandlecall}/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" value={state.message} onChange={gethandlecall}></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https:www.linkedin.com/in/sailendra-madivada-5452a7288" target="_blank"> <img src={LinkedIn} alt="Facebook"className="link"/></a>
                        <a href="https://github.com/SailendraMadivada" target="_blank"> <img src={Github} alt="twitter"className="link"/></a>
                        <a href="https://wa.me/919640849798" target="_blank">  <img src={Whatsapp} alt="Youtube"className="link"/></a>
                       <a href="https://www.instagram.com/sailendra__madivada" target="_blank"><img src={InstagramIcon} alt="Instragram"className="link"/> </a>
                    </div>
                </form>
           </div>
        </section>
    )
 }
 export default Contact