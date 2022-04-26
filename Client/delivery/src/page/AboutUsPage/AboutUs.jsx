import React from "react";
import styled from "styled-components";
import Introduction from "../../components/AboutComponents/Introduction";
import Media from "../../components/AboutComponents/Media";
import OurTeam from "../../components/AboutComponents/OurTeam";
import OurPartner from "../../components/AboutComponents/OurPartner";
import ContactUs from "../../components/AboutComponents/ContactUs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function  AboutUs(){
    return (
        <Div>
            <div>
                
                <Media />
                <Introduction />
                <OurTeam />
                <OurPartner />
                <ContactUs />
            </div>
        </Div>
    )
}
export default AboutUs;
const Div = styled.div`
    
`;