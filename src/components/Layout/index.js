import { Outlet } from "react-router-dom";
//import styled from "styled-components";

/*
const MyContent = styled(Content)`
  padding: 15px 10px;
`;
const MyContainer = styled(Layout)`
  width: calc(100% - 1000px);
`;
*/
function MyLayout() {
  return (
    <div className="wrapper d-flex align-items-stretch">
      
        <Outlet />
    </div>
  );
}
export default MyLayout;
