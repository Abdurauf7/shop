// react
import React, { Component, Fragment } from "react";

// third part
import { connect } from "react-redux";
import { Typography, Row, Col } from "antd";

// custom
import "../App.css";
import Pants from "../design/Pants";
const { Title } = Typography;

class Trouser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
            <Col span={4} offset={5}>
              <Pants />
            </Col>
            <Col span={1}>
              <Title>Trouser</Title>
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
                this.props.item.trousers.map(el => (
                  <Row>
                    <Col offset={8}>
                      <li
                        key={el.id}
                        style={{ listStyle: "none", fontSize: "30px" }}
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

const mapTopProps = store => {
  return {
    item: store
  };
};

export default connect(mapTopProps, null)(Trouser);
