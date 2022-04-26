
import styled from "styled-components";
import React from "react"
import Logo from "../../assets/LogoCompany.png"
function Footer(){
    
    return(
        <Div>
           <div className="container-fluid  mt-5 ">
                <div className=" mx-5">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-11 col-xs-11">
                            <div className="footer-text pull-text">
                                    <div className="logo">
                                        <img src={Logo} alt="" />
                                        <div className="name_company">
                                            <a href="">RedPull</a>
                                        </div>
                                    </div>
                                <div className="logo-padding" style={{height:"10px"}}></div>
                                <div className="social mt-2 mb-3">
                                    <div class="social mt-2 mb-3">
                                        <i class="fa fa-facebook-official fa-lg"></i> 
                                        <i class="fa fa-instagram fa-lg"></i>
                                        <i class="fa fa-twitter fa-lg"></i>
                                        <i class="fa fa-linkedin-square fa-lg"></i>
                                        <i class="fa fa-facebook"></i> </div>
                                    </div>
                            </div>
                        </div>
                        <div class=" information_content col-md-2 col-sm-1 col-xs-1 mb-2"></div>
                        <div class=" information_content col-md-2 col-sm-4 col-xs-4">
                            <h5 class="heading">Services</h5>
                            <ul>
                                <li>IT Consulting -</li>
                                <li>Development</li>
                                <li>Cloud</li>
                                <li>DevOps & Support</li>
                            </ul>
                        </div>
                        <div class=" information_content col-md-2 col-sm-4 col-xs-4">
                            <h5 class="heading">Industries</h5>
                            <ul class="card-text">
                                <li>Finance</li>
                                <li>Public Sector</li>
                                <li>Smart Office</li>
                                <li>Retail</li>
                            </ul>
                        </div>
                        <div class=" information_content col-md-2 col-sm-4 col-xs-4">
                            <h5 class="heading">Company</h5>
                            <ul class="card-text">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Join Us</li>
                            </ul>
                        </div>
                    </div>
                    <div class="divider mb-4"> </div>
                    <div className="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="pull-left">
                                <p><i class="fa fa-copyright"></i> 2020 thezpdesign</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="pull-right mr-4 d-flex policy">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </Div>
    )
}
export default Footer;
const Div = styled.div`
    --tw-bg-opacity: 1;
    background-color: rgba(249,249,249,var(--tw-bg-opacity));
    color: #000000;
    .footer-text{
        color: #777777;
        .logo{
            text-align: center;
            display: table-cell;
            margin-left: 5px;
            
            img{
                width: 200px;
            }
            a{
                color: red;
                font-family: 'Ms Madi', cursive;
                font-size: 35px;
                text-decoration: none;

            }
        }
        p{
            text-align: left;
        }
        .social{
            i{
                margin-right: 10px;
                float: left;
                :hover{
                    color: #000000;
                }
            }
        }

    }
    .information_content{
        margin-top: 20px;

        h5{
            text-align: left !important;

        }
        ul{
            margin: 0;
            padding: 0;
            li{
                list-style-type: none ;
                padding: 4px;
                color: #000000;
                text-align: left !important;
                cursor: pointer;
                :hover{
                    color: #ff0000;
                }
            }
        }
    }
    @media all and (max-width: 390px){
        .social{
            margin-left:18px;
        }
        .information_content {
            h5{
                text-align: center !important;

            }
            ul{
            margin: 0;
            padding: 0;
                li{
                    list-style-type: none ;
                    padding: 4px;
                    color: #000000;
                    text-align: center !important;
                    cursor: pointer;
                    :hover{
                        color: #ff0000;
                    }
                 }
             }
        }
    }

`;