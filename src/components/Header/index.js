import React from "react";

import Button from "components/Button";
import Logo from "components/Logo";
// import UserProfile from "components/UserProfile";
// import Figure from "components/Figure";

export default function Header(props) {
  return (
    <header className={["header", props.className].join(" ")}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo />
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
              {/* <UserProfile name="Robert Chandler" sub="+62 8139 3877 7946">
                <Button className="btn btn__bell">
                  <Figure
                    // srcImage={BellSVG}
                    srcImage="../../../images/icons/icon-bell.svg"
                    altImage="Bell SVG"
                    className="btn__bell--image"
                    imageClass="img-cover"
                  />
                </Button>
              </UserProfile> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
