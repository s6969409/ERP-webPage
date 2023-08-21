import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Layout} from "antd";
//import styled from "styled-components";

const { Content, Sider } = Layout;
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
