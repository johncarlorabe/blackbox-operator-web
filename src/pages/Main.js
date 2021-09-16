import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt, FaRegFileAlt, FaCog } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Home from "./Homepage/Home";
import NavigationBar from "../components/Navigation/NavigationBar";
import RegisterUser from "./WebUser/RegisterUser";

const routes = [
  {
    path: "/registeruser",
    exact: true,
    main: () => <RegisterUser />,
  },
  {
    path: "/home",
    main: () => <Home />,
  },
];

function Main() {
    
  const history = useHistory();
  const handleClick = () => history.push("/login");

  return (
    <Container fluid>
      <Row>
        <Router>
          <Col sm="auto" className="p-0">
            <div className="main-sidebar">
              <ProSidebar>
                <SidebarHeader>
                  <Link to="/home">
                    <Row className="justify-content-center my-5">
                      <img
                        className="sidebar-logo"
                        fluid
                      />
                    </Row>
                  </Link>
                </SidebarHeader>
                <SidebarContent>
                  <Menu iconShape="circle">
                    <MenuItem>MAIN MENU</MenuItem>
                    <SubMenu icon={<FaUserAlt />} title="Web Users">
                      <MenuItem>
                        <Link to="/registeruser">Register Web User</Link>
                      </MenuItem>
                      <MenuItem>View Web Users</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaRegFileAlt />} title="Reports">
                      <MenuItem>Transaction Reports</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaCog />} title="Settings">
                      <MenuItem>User Roles</MenuItem>
                    </SubMenu>
                  </Menu>
                </SidebarContent>
                <SidebarFooter>
                  <Menu iconShape="circle">
                    <MenuItem onClick={() => handleClick()} icon={<FiLogOut />}>
                      Logout
                    </MenuItem>
                  </Menu>
                </SidebarFooter>
              </ProSidebar>
            </div>
          </Col>
          <Col sm>
            <Row>
              <NavigationBar />
            </Row>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </Col>
        </Router>
      </Row>
    </Container>
  );
}
export default Main;
