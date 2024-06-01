import React from "react";
import "./Join.css";
// import { useRef } from 'react'
// import emailjs from '@emailjs/browser'

const Join = () => {
  // const form = useRef()

  // const sendEmail = (e) =>
  // {
  //   e.preventDefault();

  //   emailjs.sendForm('service_w4xilvc', 'template_izqqdvi', form.current, '6F0jmAu_24oTsD_T5')
  //     .then((result) =>
  //     {
  //       console.log(result.text);
  //     }, (error) =>
  //     {
  //       console.log(error.text);
  //     });
  // };

  return (
    <div className="Join mt-20" id="join-us">
      <div className="left-j">
        <hr />

        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        {/* <form ref={form} className='email-container' onSubmit={sendEmail}> */}
        <form className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
