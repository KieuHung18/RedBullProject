
import styled from "styled-components";
import React from "react"
import Logo from "../../assets/LogoCompany.png"
function Navbar(){
    
    return(
        <Div>
            <nav class="navbar navbar-expand-sm   bg-dark">
              <div className="container navbar_menu">
                  <a class="navbar-brand title" href="#">
                     <img src={Logo} alt="" />
                     RedBull
                  </a>

                  
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <a class="nav-link">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link">Order List</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link">Profile</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link">Login</a>
                     </li>
                  </ul>

                  
              </div>
              
            </nav>
            <div className="banner text-center bg-dark">
              <div className="content_banner">
                  <h1>Present your business in a whole new way</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <div className="search_order">
                     <input type="text" placeholder="Order search" name="" id="" />
                     <button className="btn bg-primary">Search</button>
                  </div>
              </div>
            </div>
        </Div>
    )
}
export default Navbar;
const Div = styled.div`
      .navbar_menu{
         .title{
            color: red;
            font-size: 30px;
            font-family: 'Ms Madi', cursive;
            img{
               width: 100px;
               color: #FFFF ;
            }
         }
         ul{
              font-size: 20px;
              color: #FFFF !important;
            li {
               a{
                  color: #FFFF;
                  cursor: pointer;
                  padding: 10px 10px 10px 10px;
                  :hover{
                     color: #ff0000;
                     padding: 0px 10px 0px 10px;
                     border-left: 2px  solid #FFFF;
                     border-right: 2px  solid #FFFF;
                     transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  }
               }
            }
            }
      }
    .banner{
       color: #FFFF;
       text-align: center;
       height: 400px;
       display: block;
      .content_banner{
         position: absolute;
         width: 500px;
         margin-top: 80px;
         margin-left: 30%;
         h1{
            display: block;
            font-size: 35px;
            font-weight: 600;
         }
         p{
           
            color: #a79e9e;
            font-size: 15px;
         }
         .search_order{
            input{
               height: 40px;
               width: 350px;
               border-radius: 3px;
               border: none;
               margin-left: 10px;
               padding: 10px ;
            }
            button{
               margin-bottom: 5px;
               margin-left: 35px;
               width: 80px;
               
            }
         }
      }
    }
`;