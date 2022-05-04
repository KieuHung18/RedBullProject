import styled from "styled-components";
import EditUser from "../../components/InsertComponents/EditUser";
function  Insert(){
    return (
        <Div>
            <div className="insert row container-fluid">
                <EditUser />
            </div>
        </Div>
    )
}
export default Insert;
const Div = styled.div`
    position: relative !important;
`;