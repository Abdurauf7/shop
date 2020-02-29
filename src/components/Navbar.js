// react
import React, { Component, Fragment } from "react";

// third part
import { Badge, Icon, Menu } from "antd";
import { connect } from "react-redux";

// custom
import "../design/Navbar.css";
import Jeans from "../design/Jeans";
import Sneaker from "../design/Sneaker";
import Shirt from "../design/Shirt";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <Menu mode="horizontal" style={{ borderRadius: "4px" }}>
          <Menu.Item>
            <Badge count={this.props.total} style={{ marginTop: "10px" }}>
              <Icon
                type="profile"
                style={{ fontSize: "35px", marginTop: "20px" }}
              />
            </Badge>
          </Menu.Item>
          <Menu.Item>
            <Badge
              count={this.props.item.shoes.length}
              style={{ marginTop: "10px" }}
            >
              <Sneaker />
            </Badge>
          </Menu.Item>

          <Menu.Item>
            <Badge
              count={this.props.item.trousers.length}
              style={{ marginTop: "10px" }}
            >
              <Jeans />
            </Badge>
          </Menu.Item>

          <Menu.Item>
            <Badge
              count={this.props.item.dress.length}
              style={{ marginTop: "10px" }}
            >
              <Shirt />
            </Badge>
          </Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}
const mapToStore = store => {
  console.log(store);
  return {
    item: store,
    total: store.dress.length + store.trousers.length + store.shoes.length
  };
};
export default connect(mapToStore, null)(Navbar);
