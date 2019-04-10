import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import * as actions from "../actions";

import Header from "./ui/Header";
import Home from "./Home";

class App extends React.Component {
  componentDidMount() {
    this.props.getRandom();
    this.props.getTrending();
  }

  render() {
    return (
      <Outer>
        <BrowserRouter>
          <Inner>
            <Header />
            <Route path="/" exact component={Home} />
          </Inner>
        </BrowserRouter>
      </Outer>
    );
  }
}

export default connect(
  null,
  actions
)(App);

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
`;

const Inner = styled.div`
  flex: 1;
`;
