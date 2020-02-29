// react
import React, { Component } from "react";

// third part
import { Row, Col, Input, Select, Button, Layout, notification } from "antd";
import { connect } from "react-redux";
import * as actionCreator from "./store/action/action";

// custom
import "./App.css";
import Dress from "./components/Dress";
import Trouser from "./components/Trouser";
import Shoes from "./components/Shoes";
import Navbar from "./components/Navbar";

const openNotificationWithIcon = type => {
  notification[type]({
    message: "Error",
    description: "Please input value"
  });
};

const { Option } = Select;
const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      option: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onhandleChange = this.onhandleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onhandleChange(option) {
    this.setState({ option: option });
  }

  onAddClick = e => {
    const { value, option } = this.state;
    if (value === "") openNotificationWithIcon("error");
    if (option === "dress" && value !== "") this.props.addDress(value);
    if (option === "trousers" && value !== "") this.props.addTrousers(value);
    if (option === "shoes" && value !== "") this.props.addShoes(value);
  };

  render() {
    return (
      <Layout className="layout">
        <div className="container">
          <Row style={{ marginBottom: "10px" }}>
            <Navbar />
          </Row>
          <Content style={{ padding: "30px 50px", background: "#fff" }}>
            <Row type="flex" justify="space-around">
              <Col xs={24} xl={7} span={7}>
                <Dress />
              </Col>
              <Col xs={24} xl={7} span={7}>
                <Trouser />
              </Col>
              <Col xs={24} xl={7} span={7}>
                <Shoes />
              </Col>
            </Row>
            <Footer style={{ marginTop: "40px" }}>
              <Row
                className="container"
                type="flex"
                justify="center"
                gutter={15}
              >
                <Col>
                  <Select
                    style={{ width: 120 }}
                    onChange={this.onhandleChange}
                    defaultValue="Select store"
                  >
                    <Option value="dress">dress</Option>
                    <Option value="trousers">trousers</Option>
                    <Option value="shoes">shoes</Option>
                  </Select>
                </Col>
                <Col>
                  <Input
                    style={{ width: 250 }}
                    placeholder="Enter item"
                    onChange={this.handleChange}
                    allowClear
                  />
                </Col>
                <Col>
                  <Button onClick={this.onAddClick}>Add</Button>
                </Col>
              </Row>
            </Footer>
          </Content>
        </div>
      </Layout>
    );
  }
}

const mapToDispatch = dispatch => {
  return {
    addDress: value => dispatch(actionCreator.addItem(value)),
    addTrousers: value => dispatch(actionCreator.addTrouser(value)),
    addShoes: value => dispatch(actionCreator.addShoes(value))
  };
};

export default connect(null, mapToDispatch)(App);
