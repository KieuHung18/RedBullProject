import styled from "styled-components";
import EditCustomer from "../../components/InsertComponents/EditCustomer";
function  Insert(){
    return (
        <Div>
            <div className="insert row container-fluid">
                <EditCustomer />
            </div>
        </Div>
    )
}
export default Insert;
const Div = styled.div`
    position: relative !important;
`;