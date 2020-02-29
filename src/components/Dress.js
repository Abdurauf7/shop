// react
import React, { Component, Fragment } from "react";

// third part
import { Typography, Row, Col } from "antd";
import { connect } from "react-redux";
import * as actionCreator from "../store/action/action";

// custom
import "../App.css";

const { Title } = Typography;

class Dress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            border: "4px solid #373B44",
            height: "200px",
            borderTopRightRadius: "20px ",
            borderTopLeftRadius: "20px",
            padding: "5em 0",
            background: "white",
            boxShadow: "7px 7px "
          }}
        >
          <Row>
            <Col span={12} offset={5}>
              <Title style={{ textAlign: "center" }}>
                <i
                  class="fas fa-tshirt"
                  style={{ fontSize: "50px", marginRight: "20px" }}
                ></i>
                T-Shirt
              </Title>
            </Col>
          </Row>
        </div>
        <Row>
          <div
            style={{
              border: "2px solid #373B44",
              height: "370px",
              padding: "2em 0",
              overflowX: "hidden",
              borderBottomRightRadius: "40px",
              borderBottomLeftRadius: "40px",
              background: "white",
              boxShadow: "7px 7px "
            }}
          >
            <ul>
              {this.props.item &&
                this.props.item.dress.map(el => (
                  <Row>
                    <Col offset={8}>
                      <li
                        key={el.id}
                        style={{ listStyle: "none", fontSize: "25px" }}
                      >
                        {el.item}
                      </li>
                    </Col>
                  </Row>
                ))}
            </ul>
          </div>
        </Row>
      </Fragment>
    );
  }
}
const mapToStore = store => {
  return {
    item: store
  };
};

const mapToDispatch = dispatch => {
  return {
    add: value => dispatch(actionCreator.addItem(value))
  };
};

export default connect(mapToStore, mapToDispatch)(Dress);
