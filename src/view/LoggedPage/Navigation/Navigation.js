import React from "react";
import Logo from "../../../assets/svgComponents/VTCAlogo";
import MenuIcon from "../../../assets/svgComponents/MenuIcon";

const Navagation = props => {
  return (
    <div className="navigation">
      <div style={{ backgroundColor: "#203e7d" }}>
        <MenuIcon
          onClick={props.closeSideMenu}
          id="menuIcon"
          height={30}
          width={30}
          color="#fff"
          elheight={5}
        />
        <Logo id="logo" height={40} width={220} fill="#fff" />
      </div>
      <div id="navContent" style={{ flex: 1 }}>
        <div id="title">{props.title}</div>
        <div id="username">
          <p>
            Xin chào,{" "}
            <strong>{props.userInfo !== "" ? props.userInfo : "Admin"}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navagation;
