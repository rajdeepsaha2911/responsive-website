import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-img" className="about-img" />
        <img src={play_icon} alt="play-icon" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational programs.Our cutting-edge
          curriculam is designed to empower students with the knowledge,skills
          and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation,hands-on learning and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms,schools and communities.
        </p>
        <p>
          Whether we aspire to become a teacher,administrator,counselor or
          educational leader,our diverse range of programs offer the perfect
          pathway to achieve our goals and unlock our full potential is shoping
          the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
