import React from "react";
import "./mailList.css";
import video from "../../Assets/swi.mp4";
const MailList = () => {
  return (
    <div className='mail'>
      <div className='mailOverlay'></div>
      <video
        className='mailVideo'
        src={video}
        muted
        autoPlay
        loop
        type='video/mp4'></video>
      <h1 className='mailTitle'>“Jobs fill your pockets, adventures fill your soul.”</h1>
      <span className='mailDesc'>
        Sign up and we'll send the best deals to you
      </span>
      <div className='mailInputContainer'>
        <div>
          <input className="input" type='text' placeholder='Your Email' />
        </div>
        <div>
          <button className="subButton">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
