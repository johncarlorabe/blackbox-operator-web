import React from "react";
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Row } from 'react-bootstrap';
import { FiLogOut } from "react-icons/fi";
import { FaUsers, FaUserClock, FaUserAlt, FaRegFileAlt, FaCog } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RegisterUser from "../../pages/WebUser/RegisterUser";

  const routes = [
    {
      path: "/registeruser",
      exact: true,
      main: () => <RegisterUser/>
    },
    {
      path: "/home",
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: "/shoelaces",
      main: () => <h2>Shoelaces</h2>
    }
  ];

function Sidebar() {
    return (
        <div className="main-sidebar">
            <ProSidebar>
                <SidebarHeader>
                    <Row className="justify-content-center my-5">
                        <img style={{ height: '120px', width: 'auto' }} src="/img/etisalat-logo.png" fluid />
                    </Row>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem>MAIN MENU</MenuItem>
                        <SubMenu icon={<FaUserAlt />} title="Web Users">
                            <MenuItem>Register Web User</MenuItem>
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
                        <MenuItem icon={<FiLogOut />}>Logout
                            <Link to="/login" />
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;