import React from "react";
import styled from "styled-components";
import banner from "../../assets/AboutUs/banner.jpg"
import Creativity from "../../assets/AboutUs/Creativity.svg"
import Earth from "../../assets/AboutUs/Earth.svg"
import face from "../../assets/AboutUs/face.svg"


function  Media(){
    return (
        <Div>
            <div className="media_content">
                <img src={banner} alt="" />
                <div className="container">
                    <div className="col-md-xl-12 row">
                        <div className="items_media col-md-4 col-sm-4 col-lg-4">
                            
                            <img src={Creativity} alt="" />
                            <h2>Creativity</h2>
                            <p>It's the ability to think outside the box. We make decisions,
                                 create something new and generate a lot of ideas.
                            </p>
                        </div>
                        <div className="items_media col-md-4 col-sm-4 col-lg-4">
                            
                            <img src={Earth} alt="" />
                            <h2>Worldwide</h2>
                            <p>All sites you make with Mobirise are mobile-friendly. 
                                You don't have to create a special mobile version of your site.
                            </p>
                        </div>
                        <div className="items_media col-md-4 col-sm-4 col-lg-4">
                            <img src={face} alt="" />
                            <h2>Unique Styles</h2>
                            <p>Mobirise offers many site blocks in several themes,
                                 and though these blocks are pre-made, they are flexible.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Div>
    )
}
export default Media;
const Div = styled.div`
    .media_content{
        margin-top: 20px;
        img{
            width: 100%;
            
        }
        .items_media{
            text-align: center;
            width: 338px;
            margin: auto;
            img{
                width: 120px;
                margin-top: 40px;
            }
            h2{
                margin-top:20px;
                font-weight: 400;
                font-size: 40px;
            }
            p{
                margin-top: 20px;
                font-size: 16px;
            }

        }
    }
`;