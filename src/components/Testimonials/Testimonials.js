import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForword = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next-icon"
        className="next-btn"
        onClick={slideForword}
      />
      <img
        src={back_icon}
        alt="back-icon"
        className="back-btn"
        onClick={slideBackword}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made.The supportive
                community,state-of-the-art facilities and commitment to academic
                excillence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user-2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made.The supportive
                community,state-of-the-art facilities and commitment to academic
                excillence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user-3" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made.The supportive
                community,state-of-the-art facilities and commitment to academic
                excillence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user-4" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made.The supportive
                community,state-of-the-art facilities and commitment to academic
                excillence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
