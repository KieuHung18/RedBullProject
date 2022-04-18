import React from "react";
import { } from 'react-bootstrap';//{Card,ListGroupItem,ListGroup} 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import jquery  from 'jquery';

// function doAjaxPost() {
//     jquery.ajax({
//         type: "POST",
//         url: "http://localhost:8080/delivery/Profile",
//         data: "clientData=Profile",
//         success: function(response){
//             console.log(response.result)
//          },
//     });
    
//   }
//   function App() {
//     return (
//       <button onClick={doAjaxPost} className='button' id='button-id'>connect</button>
//     );
//   }

export class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Page title --> */}
                        <div className="my-5">
                            <h3>Profile</h3>
                            <hr/>
                        </div>
                        {/* <!-- Form START --> */}
                        <form className="file-upload">
                            <div className="row mb-5 gx-5">
                                {/* <!-- Contact detail --> */}
                                <div className="col-xxl-8 mb-5 mb-xxl-0">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Contact detail</h4>
                                            {/* <!-- First Name --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">First Name *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="First name" value="Scaralet"/>
                                                
                                            </div>
                                            {/* <!-- Last name --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Last Name *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Last name" value="Doe"/>
                                            </div>
                                            {/* <!-- Phone number --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Phone number *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="(333) 000 555"/>
                                            </div>
                                            {/* <!-- Mobile number --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Address *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Address" value="Ho Chi Minh"/>
                                            </div>
                                            {/* <!-- Email --> */}
                                            <div className="col-md-6">
                                                <label for="inputEmail4" className="form-label">Email *</label>
                                                <input type="email" className="form-control" id="inputEmail4" value="example@homerealty.com"/>
                                            </div>
                                            {/* <!-- Skype --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Skype *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="Scaralet D"/>
                                            </div>
                                        </div> 
                                        {/* <!-- Row END --> */}
                                    </div>
                                </div>
                                {/* <!-- Upload profile --> */}
                                <div className="col-xxl-4">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                                            <div className="text-center">
                                                {/* <!-- Image upload --> */}
                                                <div className="square position-relative display-2 mb-3">
                                                    <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                                </div>
                                                {/* <!-- Button --> */}
                                                <input type="file" id="customFile" name="file" hidden=""/>
                                                    <label className="btn btn-success-soft btn-block" for="customFile">Upload</label>
                                                    <button type="button" className="btn btn-danger-soft">Remove</button>
                                                    {/* <!-- Content --> */}
                                                    <p className="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* <!-- Row END --> */}

                            {/* <!-- Social media detail --> */}
                            <div className="row mb-5 gx-5">
                                <div className="col-xxl-6 mb-5 mb-xxl-0">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Social media detail</h4>
                                            {/* <!-- Facebook --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i className="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Facebook" value="http://www.facebook.com"/>
                                            </div>
                                            {/* <!-- Twitter --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i className="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Twitter" value="http://www.twitter.com"/>
                                            </div>
                                            {/* <!-- Linkedin --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Linkedin" value="http://www.linkedin.com"/>
                                            </div>
                                            {/* <!-- Instragram --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i className="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Instragram" value="http://www.instragram.com"/>
                                            </div>
                                            {/* <!-- Dribble --> */}
                                            <div className="col-md-6">
                                                <label className="form-label"><i class="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>Dribble *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Dribble" value="http://www.dribble.com"/>
                                            </div>
                                            {/* <!-- Pinterest --> */}
                                            <div className="col-md-6">
                                                <label claclassNamess="form-label"><i class="fab fa-fw fa-pinterest text-pinterest"></i>Pinterest *</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Pinterest" value="http://www.pinterest.com"/>
                                            </div>
                                        </div>
                                         {/* <!-- Row END --> */}
                                    </div>
                                </div>

                                {/* <!-- change password --> */}
                                <div className="col-xxl-6">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="my-4">Change Password</h4>
                                            {/* <!-- Old password --> */}
                                            <div className="col-md-6">
                                                <label for="exampleInputPassword1" className="form-label">Old password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                                            </div>
                                            {/* <!-- New password --> */}
                                            <div className="col-md-6">
                                                <label for="exampleInputPassword2" className="form-label">New password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2"/>
                                            </div>
                                            {/* <!-- Confirm password --> */}
                                            <div className="col-md-12">
                                                <label for="exampleInputPassword3" className="form-label">Confirm Password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* <!-- Row END -->
                            <!-- button --> */}
                            <div className="gap-3 d-md-flex justify-content-md-end text-center">
                                <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
                                <button type="button" className="btn btn-primary btn-lg">Update profile</button>
                            </div>
                        </form> 
                        {/* <!-- Form END --> */}
                    </div>
                </div>
            </div>


        );
    }
}