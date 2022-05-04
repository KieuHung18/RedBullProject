import styled from "styled-components";
import InsertUsers from "../../components/InsertComponents/InsertUsers";
function  Insert(){
    return (
        <Div>
            <div className="insert row container-fluid">
                <InsertUsers />
            </div>
        </Div>
    )
}
export default Insert;
const Div = styled.div`
    position: relative !important;
`;