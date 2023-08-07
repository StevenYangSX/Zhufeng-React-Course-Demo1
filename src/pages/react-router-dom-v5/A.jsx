import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import A1 from "./a/A1";
import A2 from "./a/A2";
import A3 from "./a/A3";
const ABox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .menu {
    a {
      color: balck;
      display: block;
      font-size: 12px;
    }
  }
`;
const A = () => {
  return (
    <ABox>
      <div className="menu">
        <Link to="/a/a1">A1</Link>
        <Link to="/a/a2">A2</Link>
        <Link to="/a/a3">A3</Link>
      </div>
      <div className="view">
        <Switch>
          <Route path="/a/a1" component={A1} />
          <Route path="/a/a2" component={A2} />
          <Route path="/a/a3" component={A3} />
        </Switch>
      </div>
    </ABox>
  );
};

export default A;
