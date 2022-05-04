import styled  from "styled-components"

function ControlRight(){
    return (
        <Section>
            <div className="RightControl">
                <div className="item">
                    <a href="/InsertUser">Insert user</a>    
                </div>           
                <div className="item">
                    <a href="/InsertCustomer">Insert customer</a>
                </div>
            </div>
        </Section>
    )
}
export default ControlRight
const Section = styled.section`
    .RightControl{
        text-align: left;
        background-color: #dfdbdb3c;
        height: 200px;
        border-radius: 10px;
        box-shadow:  5px 5px #8888883d;

        .item{
            position: relative;
            padding-top: 15px;
            a{
                text-decoration: none;
                font-size: 20px;
                color: #000000;
                font-weight: 500;
                margin-left: 30px;
                top: 50px;
            }
        }
    }
`;