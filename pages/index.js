
import React, { Component } from "react";
var __html = require('./template/template');
var template = { __html: __html };

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <span dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}
export default Home;