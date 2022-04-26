import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import img1 from "../../assets/AboutUs/OurPartner/1.png"
import img2 from "../../assets/AboutUs/OurPartner/2.png"
import img3 from "../../assets/AboutUs/OurPartner/3.png"
import img4 from "../../assets/AboutUs/OurPartner/4.png"
import img5 from "../../assets/AboutUs/OurPartner/5.png"
import img6 from "../../assets/AboutUs/OurPartner/6.png"

function  OurPartner(){

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <Div>
            
             <div className="main_sections container text-center">
                <div className="section_content">
                    <div className="title">
                        <h1>Our Partner</h1>
                        <p>Thank you for choosing us!</p>
                    </div>
                    <Slider {...settings}>
                        <div className="slider_img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="slider_img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="slider_img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="slider_img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="slider_img">
                            <img src={img5} alt="" />
                        </div>
                        <div className="slider_img">
                            <img src={img6} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </Div>
    )
}
export default OurPartner;
const Div = styled.div`
    background: linear-gradient(#e6e0ff, #ecfafc);
    padding-top: 05px;
    height: 300px;
    margin-top: 30px;
    .main_sections{
        .section_content{
            margin-top: 50px;
        }
        
    }

    .slider_img{
        width: 30% !important;

    }
    @media all and (max-width: 390px){
        .main_sections{
            width: 90%;
            .slider_img{
            img{
                width: 68px;
            }
        }
        
        }
    }
`;