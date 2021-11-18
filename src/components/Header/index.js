import React from "react";

import Button from "components/Button";

export default function Header(props) {
  return (
    <header className={["header", props.className].join(" ")}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Button className="navbar-brand" type="link" href="/">
            <span className="navbar-brand--text">WalletKU</span>
          </Button>
          <Button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Button
                className="btn btn__auth sign-in me-md-4"
                type="link"
                href="/signin"
              >
                Sign in
              </Button>
              <Button
                className="btn btn__auth sign-up"
                type="link"
                href="/signup"
              >
                Sign up
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
