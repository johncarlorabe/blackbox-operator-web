import React from "react";
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Row } from 'react-bootstrap';
import { FiLogOut } from "react-icons/fi";
import { FaUsers, FaUserClock, FaUserAlt, FaRegFileAlt, FaCog } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="main-sidebar">
            <ProSidebar>
                <SidebarHeader>
                    <Row className="justify-content-center my-5">
                        <img style={{ height: '150px', width: 'auto' }} src="/img/etisalat-logo.png" fluid />
                    </Row>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem>MAIN MENU</MenuItem>
                        <SubMenu icon={<FaUsers />} title="Subscribers">
                            <MenuItem>Search Account</MenuItem>
                            <MenuItem>Register Account</MenuItem>
                            <MenuItem>Global Search</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaUserClock />} title="Pendings">
                            <MenuItem>Search Account</MenuItem>
                            <MenuItem>Register Account</MenuItem>
                            <MenuItem>Global Search</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaUserAlt />} title="Web Users">
                            <MenuItem>View Web Users</MenuItem>
                            <MenuItem>Register Web User</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaRegFileAlt />} title="Reports">
                        </SubMenu>
                        <SubMenu icon={<FaCog />} title="Settings">
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FiLogOut />}>Logout
                            <Link to="/" />
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;