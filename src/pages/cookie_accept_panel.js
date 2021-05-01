import React, { Component } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies("myCat");
class CookieAccept extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cookie-accept container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col d-flex">
            <p className="my-auto">
              This website uses cookies to improve user experience. If you're
              continue browsing, we will consider that you accept to our <a target="_blank" href="/cookie">Cookie Policies</a>
            </p>
          </div>
          <div className="col text-center mt-3 mt-md-0">
            <button
              className="btn"
              onClick={() => this.props.set()}>
              ACCEPT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CookieAccept;
