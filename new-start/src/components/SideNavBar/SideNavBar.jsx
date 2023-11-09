import React from "react";
import "./SideNavBar.scss";
import Icons from "../../assets/icons/Icons";
import Button from "./Button";
import Histories from "../../constants/History.json";


function SideNavBar() {
  return (
    <>
      <div className="sideNavbar d-flex flex-column p-0 m-0">
        <div className="logo d-flex">
          <img src={Icons.vector} alt="" />
          <span> Divum AI </span>
        </div>

        <div className="sidebar-buttons p-4 pt-0">
        <span className="side-heading">Demos</span>

       
        <ul className="demo-list list-group ">
          <li className="d-flex">
            <img src={Icons.pdf_icon} />
            <p>PDFChatBot</p>
          </li>
          <li className="d-flex">
            <img src={Icons.text_icon} alt="" />
            <p>Text ProductDescriber</p>
          </li>
          <li className="d-flex">
            <img src={Icons.image_icon} alt="" />
            <p>Image ProductDescriber</p>
          </li>
        </ul>
</div>
<hr className="line-2" />
        <div className="history-constainer d-flex flex-column p-4 m-0 pt-1 ">
          <span className="side-heading">History</span>
          <ul className="list-group">
            {Histories.map((history) => (
              <li className="history-record d-flex">
                <img src={Icons.history_icon} alt="" />
                <p>{history.title}</p>
              </li>
            ))} 
           
          </ul>
        </div>
<hr className="line-1 m-0"/>
        <div className="feature-btn-container d-flex flex-column p-0 m-0 ">
          <ul className="list-group " >
            <li className="d-flex"> 
              <img src={Icons.delete_icon} alt="" />
              <p>Clear Conversations</p>
            </li>
            <li className="d-flex">
              <img src={Icons.light_mode_icon} alt="" />
              <p>Light Mode</p>
            </li>
            <li className="d-flex">
              <img src={Icons.account_icon} alt="" />
              <p>My Account</p>
            </li>
            <li className="d-flex">
              <img src={Icons.updates_icon} alt="" />
              <p>Updates & FAQ</p>
            </li>
            <li className="d-flex">
              <img src={Icons.logout_icon} alt="" />
              <p>Log out</p>
            </li>
          </ul>
        </div>
          

      </div>
    </>
  );
}

export default SideNavBar;
