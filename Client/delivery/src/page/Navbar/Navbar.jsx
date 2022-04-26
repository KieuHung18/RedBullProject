
import styled from "styled-components";
import React from "react"
import Logo from "../../assets/LogoCompany.png"
function Navbar(){
    
 function  toggler(){
    
   

   // var toggler = document.getElementById("toggler")
   // toggler.style.display="none"

   var navbar_nav= document.getElementById("navbar_menu")
   navbar_nav.classList.toggle("navbar_mobile")

    
   }
    return(
        <Div>
            <nav id="navbar_menu"  className="navbar container_nav navbar-expand-sm">
              <div className="container navbar_menu">
                  <a className="navbar-brand title" href="/">
                     <img  src={Logo} alt="" />
                     <a href="">
                        RedBull  
                     </a>
                  </a>
                  <button onClick={toggler} id="toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  
                  <ul id="navbar-nav" className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <a href="/" class="nav-link">Home</a>
                     </li>
                     <li class="nav-item">
                        <a href="/aboutUs" class="nav-link">About</a>
                     </li>
                     <li class="nav-item">
                        <a href="/PackageList" class="nav-link">Order List</a>
                     </li>
                     <li class="nav-item">
                        <a  href="/Profile" class="nav-link">Profile</a>
                     </li>
                     <li class="nav-item">
                        <a href="/Login"  class="nav-link">Login</a>
                     </li>
                  </ul>

                  
              </div>
              
            </nav>
            <div className="banner justify-content-center row">
               <div className="col-md-6 content_banner ">
                  <h1>Present your business in a whole new way</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <div className="search_order">
                     <input type="text" placeholder="Order search" name="" id="" />
                     <button className="btn ">Search</button>
                  </div>
               </div>
            </div>
        </Div>
    )
}
export default Navbar;
const Div = styled.div`
     .container_nav{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      .navbar_menu{
         margin-top: 0px;
         .title{
           
            img{
               width: 100px;
               color: #FFFF ;
            }
            a{
               color: red;
               font-size: 30px;
               font-family: 'Ms Madi', cursive;
               text-decoration: none;
            }
         }
         ul{
              font-size: 20px;
              color: #000000 !important;
            li {
               a{
                  color: #000000;
                  cursor: pointer;
                  padding: 10px 10px 10px 10px;
                  :hover{
                     color: #ff0000;
                     padding: 0px 10px 0px 10px;
                     border-left: 2px  solid #FFFF;
                     border-right: 2px  solid #FFFF;
                     transition: 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  }
               }
            }
            }
      }
   
     }
     .banner{
       /* text-align: center;
       height: 400px;
       display: block; */
      .content_banner{
         width: 500px;
         h1{
           color: #000000;
            display: block;
            font-size: 35px;
            font-weight: 600;
         }
         p{
           
            color: #312f2f;
            font-size: 15px;
         }
         .search_order{
            input{
               height: 40px;
               width: 350px;
               border-radius: 5px;
               border: 1px solid #f32424;
               margin-left: 10px;
               padding: 10px ;
               :focus{
                  border: 1px solid #f32424;
                  outline: none;
               }
            }
            button{
               margin-bottom: 5px;
               margin-left: 10px;
               border: 1px solid #30bdff;
               height: 40px;
               width: 100px;
               :hover{
                  color: #FFFF;
                  background-color: #30bdff ;
                  border: 1px solid #000000;
               }
            }
         }
      }
    }
    
@media all and (max-width: 390px){
   .navbar_menu{
      .title{
        
         img{
            width: 50px !important;
         }
         a{
            font-size: 20px !important;
            position: absolute;
            margin-top: 6px !important;
         }

      }
      button{
         background-color: #000000;
         ::before{
            content: "";
            width: 24px;
            height: 2px;
            background-color: #FFFF;
            position: absolute;
            margin-left: 3px;
            margin-top: 5px;
         }
         ::after{
            content: "";
            width: 24px;
            height: 2px;
            background-color: #FFFF;
            position: absolute;
            margin-left: -27px;
            margin-top: 20px;
         }
      }
      .navbar-nav{
         display: none;
         
      }
     
   }
   .navbar_mobile{
      position: absolute;
      height: 400px;
      width: 200px;
      background-color: #FFFFFF;
      margin-left: 190px;
      .title{
         display: none;
      }
      ul{
         text-align: center;
         margin-left: 27px;
      }
      .navbar-nav{
         display: block ;
         top: -183px !important;

      }
      .navbar-toggler{
         display: block;
         position: absolute;
         margin-left: 107px;
         margin-top: -327px;
         border-radius: 10px;
         ::after{
            transform: rotate(45deg);
            margin-top: 15px;
         }
         ::before{
            transform: rotate(135deg);
            margin-top: 15px;
         }
      }
   }
  .search_order{
     input{
        width: 298px !important;
       
     }
     button{
        margin-right: 100px;
        margin-top: -62px;
        margin-left: 217px !important;
     }
  }
}

`;