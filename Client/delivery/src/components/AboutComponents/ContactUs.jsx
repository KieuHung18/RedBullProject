import React from "react";
import styled from "styled-components";

function  ContactUs(){
    return (
        <Div>
            <div className="container text-center" >
                <div className="form_section">
                    <h1>Contact us</h1>
                    <form action="">
                        <div className="information_Section">
                           <div className="items_form name">
                                <p>Name</p>
                                <input type="text" />
                           </div>
                           <div className="items_form name">
                                <p>Email</p>
                                <input type="email" />
                           </div>
                           <div className="items_form name">
                                <p>Phone</p>
                                <input type="phoneNumber" />
                           </div>

                        </div>
                        <div className="message_section">
                            <p>Message</p>
                            <input type="text" />
                        </div>
                        <button>send form</button>
                    </form>
                </div>
            </div>
        </Div>
    )
}
export default ContactUs;
const Div = styled.div`
    margin-top: 50px;
    .form_section{
        form{
            text-align: center;

           .information_Section{
               display: flex;
               justify-content: center;
               .items_form{
                   p{
                       margin-left: -184px;
                       margin-bottom: 0px;
                   }
                   input{
                       width: 200px;
                       margin-right: 20px;
                       height: 40px;
                       border: 1px solid #9c9b9b;
                       border-radius: 2px;
                   }
               }
           } 
           .message_section{
               margin-top: 20px;
                    p{
                       margin-left: -600px;
                       margin-bottom: 0px;
                    }
                    input{
                        width: 640px;
                        height: 200px !important;
                        margin-right: 20px;
                        height: 40px;
                        border: 1px solid #9c9b9b;
                        border-radius: 2px;
                    }
            }
            button{
                padding: 10px 20px 10px 20px ;
                text-transform: uppercase;
                margin-right: 20px;
                border: 1px solid #9c9b9b;
                border-radius: 4px;
                margin-top: 20px;
            }
            }
    }
`;