import React from "react";
import styled from "styled-components";

function  Introduction(){
    return (
        <Div>
            <div className="container">
                <div className="row justify-content-center content_introduction">
                    <h1>Meet out team</h1>
                    <p>We are all very different. We were born in different cities,
                        at different times, we love different music, food, movies.
                         But we have something that unites us all. It is our company. We are its heart.
                          We are not just a team, we are a family.
                    </p>
                    <button>Contact us</button>
                </div>
            </div>
        </Div>
    )
}
export default Introduction;
const Div = styled.div`
    .content_introduction{
        text-align: center;
        margin-top: 40px !important;
        width: 80%;
        margin: auto;
        h1{
            font-size: 48px;
            font-weight: 400;
            text-transform: uppercase;
        }
        p{
            font-size: 24px;
            color: #232323;
            white-space: inherit;
        }
        button{
            width: 220px;
            height: 58px;
            background-color: #FFFF;
            border: 1px solid #232323;
            border-radius: 4px;
            font-size: 16px ;
            text-transform: uppercase;
            :hover{
                background-color:#232323 ;
                color: #FFFF;
                transition: 0.5s all;
            }
        }
    }
    @media all and (max-width: 390px){
        .content_introduction{
            width: 100% !important;
            p{
                font-size: 16px  !important;
            }
        }
    }
`;