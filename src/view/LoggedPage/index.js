import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import SideMenu from "./SideMenu";
import Backdrop from "../../theme/Backdrop";
import Dashbroad from "../Dashbroad";
import StudentManage from "../StudentManage";
import ClassManage from "../ClassManage";

class LoggedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: Boolean(localStorage.getItem("_lgn")),
      openSideMenu: false
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    if (window.innerWidth <= 1024) {
      this.setState({
        openSideMenu: false
      });
    } else if (window.innerWidth > 1024) {
      this.setState({
        openSideMenu: true
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  closeSideMenu = () => {
    if (window.innerWidth <= 1024) {
      this.setState(prevState => ({
        openSideMenu: !prevState.openSideMenu
      }));
    }
  };

  render() {
    if (!this.props.isLogged) {
      return <Redirect to={"/"} />;
    }
    return (
      <React.Fragment>
        <Navigation closeSideMenu={this.closeSideMenu} />
        {this.state.openSideMenu && window.innerWidth <= 728 && (
          <Backdrop closeBackdrop={this.closeSideMenu} />
        )}
        {this.state.openSideMenu && (
          <SideMenu
            isLogged={this.state.isLogged}
            onClick={this.closeSideMenu}
          />
        )}
        <div className="pageContent">
          <Switch>
            <Route exact path={"/academic/dashbroad"} component={Dashbroad} />
            <Route path={"/academic/student"} component={StudentManage} />
            <Route path={"/academic/class"} component={ClassManage} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
})

export default connect(mapStateToProps, null)(LoggedPage);
