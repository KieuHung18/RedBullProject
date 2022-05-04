import styled from "styled-components";
import InsertCustomer from "../../components/InsertComponents/InsertCustomer";
function  Insert(){
    return (
        <Div>
            <div className="insert row container-fluid">
                <InsertCustomer />
            </div>
        </Div>
    )
}
export default Insert;
const Div = styled.div`
    position: relative !important;
`;