import React from "react";
import { useSelector } from "react-redux";
import cookie from "js-cookie";

import Button from "components/Button";
import Logo from "components/Logo";
import UserProfile from "components/UserProfile";
import Figure from "components/Figure";

export default function Header(props) {
  const isLoggedin = cookie.get("token");

  const { data } = useSelector((state) => state.user);

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
              {isLoggedin ? (
                <UserProfile
                  name={`${data.firstName} ${data.lastName}`}
                  sub={data.noTelp ? data.noTelp : null}
                  imageSrc={
                    data.image
                      ? `${process.env.REACT_APP_API_HOST}/uploads/${data.image}`
                      : "../../../images/default.png"
                  }
                >
                  <Button className="btn btn__bell">
                    <Figure
                      srcImage="../../../images/icons/icon-bell.svg"
                      altImage="Bell SVG"
                      className="btn__bell--image"
                      imageClass="img-cover"
                    />
                  </Button>
                </UserProfile>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
