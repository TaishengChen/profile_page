import React from "react";
import { MdEmail } from "react-icons/md";
import './Info.css'

const Info = () => {
  const handleClick = () => {
    window.location.href = "mailto:ists.chen@gmail.com";
  };
  return (
    <div className="info-item">
      <img
        src="https://i.pinimg.com/564x/51/f1/c4/51f1c4cf7b732a99471d0beca326d666.jpg"
        alt="Profile"
        className="info-image-prodile"
      ></img>
      <h2 className="info-name-content">Taisheng Chen</h2>
      <h4 className="info-job-title">Frontend Developer</h4>
      <h5 className="info-description">Taisheng.website</h5>

      <button onClick={handleClick} className="info-email-button">
        <MdEmail className="info-email-icon"/> Email
      </button>
    </div>
  );
};

export default Info;
