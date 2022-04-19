import React from "react";
import styled from "styled-components";
 import Slider from "react-slick"
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chidokato from "../../assets/AboutUs/OurTeam/chidokato.jpg"
function  OurTeam(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <Div>
        <Slider {...settings}>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>
            <div className="Container text-center">
              <img src={Chidokato} alt="" />
              <p>
              All issues are resolved promptly. In communication, the employees are pleasant,
               helpful. Always offer new ideas, new ways to develop, improve our project.
              </p>
              <h1>Cao Dương Tuấn</h1>
              <h2>Developer</h2>
            </div>

        </Slider>
      </Div>
    )
}
export default OurTeam;
const Div = styled.div`
  margin-top: 40px;
    .Container{
      text-align: center;
      width: 50% !important;
      margin: auto;
      display: block !important;
      img{
        margin: auto;
        border-radius: 50%;
      }
      p{
        margin-top: 10px;
      }
      h2{
        font-size: 25px;
        font-weight: 300;
        text-transform: uppercase;
      }
    }
`;