import React from "react";
import { } from 'react-bootstrap';//{Card,ListGroupItem,ListGroup} 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import jquery  from 'jquery';

var user;
user={
    FirstName:"",LastName:"",PhoneNumber:"",Address:"",
};
export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loadData: true };
      }
    componentDidMount() {
        var display=this;
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/user",
            data:{userID: localStorage.getItem("user")},
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
            if(res.result=="SUCCESS"){
                if(display.state.loadData){
                    user={
                        FirstName:res.response.firstName,LastName:res.response.lastName,PhoneNumber:res.response.phoneNumber,Address:res.response.address
                    };
                display.setState({ loadData: false });
            }
                
            }
            else{console.log("fail");
                //redirect
            }
            },
            error: function(){
                console.log("error");
            }
        });
    }
     logout() {
        console.log("logout");
        localStorage.clear();
      }
    render() {
        return (
            <div className="container">  
            <div>
                <div>
                <button onClick={this.logout} className="btn-logout" type="button">Logout</button>
                        {/* <!-- Page title --> */}
                        <div className="header-profile">
                            <h1 className="profile">Profile</h1>
                            <hr/>
                        </div>
                        {/* <!-- Form START --> */}
                        </div>
                        <form >


                            {/* <!-- Contact detai and Upload profile--!> */}
                            <div className="contact-and-profile form__wrapper">
                                {/* <!-- Contact detail --> */}
                                        <div className="main-contact-detail">
                                            <h4 className="contact-detail">Contact detail</h4>
                                            {/* <!-- First Name --> */}
                                            <div className="first-name">
                                                <label className="name">First Name *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="First name" value={user.FirstName}/>
                                            </div>
                                            {/* <!-- Last name --> */}
                                            <div className="last-name">
                                                <label className="name">Last Name *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Last name" value={user.LastName}/>
                                            </div>
                                            {/* <!-- Phone number --> */}
                                            <div className="phone">
                                                <label className="phone-number">Phone number *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Phone number" value={user.PhoneNumber}/>
                                            </div>
                                            {/* <!-- Mobile number --> */}
                                            <div className="">
                                                <label className="form-address">Address *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Address" value={user.Address}/>
                                        {/* <!-- Row END --> */}
                                            </div>
                                        </div>
                                {/* <!-- Upload profile --> */}
                                <div className="main-upload-profile">
                                    <h4 className="label-upload">Upload your profile photo</h4>
                                        <div className="text-center">
                                                {/* <!-- Image upload --> */}
                                            <div className="position-relative">
                                            </div>
                                                {/* <!-- Button --> */}
                                                <input type="file"  className="open-file"/>
                                                <div className="upload-and-remove form__wrapper">
                                               
                                                <button className="btn-upload" for="customFile">Upload</button>
                                                <button type="button" className="btn-remove">Remove</button>
                                               
                                                </div>
                                                    {/* <!-- Content --> */}
                                                    <p className="text-muted mt-3 mb-0"><span>Note: </span> Minimum size 300px x 300px</p>
                                         </div>
                                </div>
                            </div> 
                            {/* <!-- Row END --> */}


                            {/* <!-- Social media detail and change password --> */}
                            <div className="social-and-changepass form__wrapper">
                                {/* <!-- Social media detail --> */}
                                <div className="social-media-detail-main">
                                        <div className="row">
                                            <h4 className="mb-4 mt-0">Social media detail</h4>
                                            {/* <!-- Facebook --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fa fa-facebook-official"></i> Facebook</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Facebook" value="http://www.facebook.com"/>
                                            </div>
                                            {/* <!-- Twitter --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fa fa-twitter"></i> Twitter</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Twitter" value="http://www.twitter.com"/>
                                            </div>
                                            {/* <!-- Linkedin --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fa fa-linkedin"></i> Linkedin</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Linkedin" value="http://www.linkedin.com"/>
                                            </div>
                                            {/* <!-- Instragram --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fa fa-instagram"></i> Instagram</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Instragram" value="http://www.instragram.com"/>
                                            </div>
                                            {/* <!-- Dribble --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fa fa-dribbble"></i> Dribble</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Dribble" value="http://www.dribble.com"/>
                                            </div>
                                            {/* <!-- Pinterest --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fa fa-pinterest-p"></i> Pinterest</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Pinterest" value="http://www.pinterest.com"/>
                                         
                                         {/* <!-- Row END --> */}
                                    </div>
                                </div>
                            </div>
                                {/* <!-- change password --> */}
                               
                                   
                                    <div className="label-change-password">
                                        <h4 className="my-4">Change Password</h4>
                                            {/* <!-- Old password --> */}
                                        <div className="old-pass">
                                                <label for="exampleInputPassword1" className="form-label">Old password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                            {/* <!-- New password --> */}
                                        <div className="new-pass">
                                                <label for="exampleInputPassword2" className="form-label">New password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2"/>
                                        </div>
                                            {/* <!-- Confirm password --> */}
                                        <div className="confirm-pass">
                                                <label for="exampleInputPassword3" className="form-label">Confirm Password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword3"/>
                                        </div>
                                    </div>
                            </div>
                            {/* <!-- Row END -->


                            <!-- button --> */}
                            <div className="gap-3 d-md-flex justify-content-md-end text-center">
                                <button type="button" className="btn-delete-profile">Delete profile</button>
                                <button type="button" className="btn-update-profile">Update profile</button>
                            </div>
                        </form> 
                        {/* <!-- Form END --> */}
                    </div>
                    </div>  
        );
    }
}