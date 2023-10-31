import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import logo from '../../Assets/logo.jpeg'
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zqhodjp', 'template_v0dtoah', form.current, 'He3Z1ILv2co1GCiYm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        
       
        <div id='contact' className='container mx-auto justify-center items-start'>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</p>
            <div className=' flex justify-between flex-col-reverse sm:flex-row'>
            <form className='flex flex-col w-[300px] sm:w-[800px]' ref={form} onSubmit={sendEmail}>
                <label className='text-white font-medium my-4'>Name</label>
                <input type="text" name="user_name" className='rounded-2xl p-3'     placeholder='Whats your name?' />
                <label className='text-white font-medium my-4'>Email</label>
                <input type="email" name="user_email" className='rounded-2xl p-3'              placeholder='Whats your email?'/>
                <label className='text-white font-medium my-4'> Message</label>
                <textarea
                className='rounded-2xl p-3'
                     rows='7'  
                     placeholder='What do you want to say?' style={{resize: 'none'}}/>
                <input className='bg-purple-500 p-2 mt-8 w-[250px] rounded-2xl text-[18px] font-semibold' type="submit" value="Send" />
              </form>
              <img src={logo}  className='invert sm:w-[500px] w-[250px]' alt="logo" />
            </div>
            
                 

   
        </div>
      
    );
}

export default Contact
