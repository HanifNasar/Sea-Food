import React, { useRef } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import fishImage from '../../assets/contactbg.jpg';
import Navbar2 from '../Navbar2';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const email = form.current.querySelector('input[name="user_email"]').value;
    const emailError = document.getElementById('emailError');
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      emailError.classList.remove('hidden');  
      return;  
    } else {
      emailError.classList.add('hidden');  
    }
  
    emailjs
      .sendForm('service_8g0sfhh', 'template_mc5txor', form.current, {
        publicKey: 'SXvatFb4d2qIfc6mY',
      })
      .then(
        () => {
          toast("Message Sent!");
          form.current.reset();  
        },
        (error) => {
          toast("Wow so easy!");
        },
      );
  };

  return (
    <>
    <div 
  className="sticky top-0 z-50 bg-opacity-80 bg-white backdrop-blur-md h-[120px]"
 
>
  <Navbar2 />
</div>
    <div
      className="bg-black text-white py-20 min-h-screen"
      id="contact"
      style={{
        backgroundImage: `url(${fishImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block mr-2" />
              <a href="mailto:youremail@example.com" className="hover:underline">
                nasarasik2010@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block mr-2" />
              <span>+917708976436</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block mr-2" />
              <span>Cuddalore, Tamil Nadu, India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded border-gray-600 text-black focus:outline-none focus:border-green-400"
                  name="user_name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded text-black border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  name="user_email"
                  required
                />
                <span id="emailError" className="text-red-500 text-sm hidden">Please enter a valid email address</span>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 rounded text-black border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  name="message"
                  required
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-2 mb-2' style={{textAlign:'center', fontSize:'13px'}}>
    <p>Copyright © 2024. All Rights Reserved</p>
    </div>
  </>
  
  )
}

export default Contact