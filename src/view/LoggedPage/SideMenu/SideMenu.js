import React from "react";
import { Link, Redirect } from "react-router-dom";
import MenuItem from "./MenuItem";

const SideMenu = props => {
  const logout = () => {
    props.resetStudentState();
    props.resetClassState();
    props.logout();
    return <Redirect to={"/"} />;
  };

  return (
    <div className="sideMenu">
      <ul className="list-unstyled components">
        <Link style={{ textDecoration: "none" }} to="/academic/dashbroad">
          <MenuItem title="Thống kê" classes="item" onClick={props.onClick} />
        </Link>
        <li>
          <span
            href="#submenu01"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Quản lý
          </span>
          <ul className="collapse list-unstyled" id="submenu01">
            <Link style={{ textDecoration: "none" }} to="/academic/student">
              <MenuItem
                title="Sinh viên"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/academic/class">
              <MenuItem
                title="Lớp học"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/academic/subject">
              <MenuItem
                title="Môn học"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/academic/program">
              <MenuItem
                title="Chương trình học"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
          </ul>
        </li>
        <li>
          <span
            href="#submenu02"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Mở rộng
          </span>
          <ul className="collapse list-unstyled" id="submenu02">
            <Link style={{ textDecoration: "none" }} to="/academic/setting">
              <MenuItem
                title="Cài đặt"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/academic/help">
              <MenuItem
                title="Trợ giúp"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/academic/contact">
              <MenuItem
                title="Liên hệ"
                classes="item"
                onClick={props.onClick}
              />
            </Link>
          </ul>
        </li>
        <Link style={{ textDecoration: "none" }} to="/">
          <MenuItem
            onClick={logout}
            title="Đăng xuất"
            classes="item"
          />
        </Link>
      </ul>
    </div>
  );
};

export default SideMenu;
