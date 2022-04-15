import React from 'react';
import UserNavBar from "./UserNavBar"
import Sidebar from "./Sidebar.js"
import "../CSS/UserLayout.css"

const UserLayout = ({ children }) => {
  return (
    <div className="UserLayout">
        <div className='userLayoutSidebar'>
            <Sidebar />
        </div>
        <div className="userLayoutNavBar">
            <UserNavBar title={document.title}/>
            {children}
        </div>
    </div>
  );
};
export default UserLayout;