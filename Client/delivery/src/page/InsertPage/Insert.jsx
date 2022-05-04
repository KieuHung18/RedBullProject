import styled from "styled-components";
import ControlRight from "../../components/InsertComponents/ControlRight";
import InsertUsers from "../../components/InsertComponents/insertUsers";
import InsertCustomer from "../../components/InsertComponents/InsertCustomer";
function  Insert(){
    return (
        <Div>
            <div className="insert row container-fluid">
                <div className="col-md-3">
                    <ControlRight />
                </div>
                <div className="col-md-9">
                   {/* <InsertUsers /> */}
                   <InsertCustomer />
                </div>
            </div>
        </Div>
    )
}
export default Insert;
const Div = styled.div`
    position: relative !important;
`;