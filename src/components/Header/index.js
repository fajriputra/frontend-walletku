import React, { useState } from "react";
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import { CloseSVG, BarsSVG } from "components/SVG";
import Button from "components/Button";
import Logo from "components/Logo";
import UserProfile from "components/UserProfile";
import Figure from "components/Figure";

export default function Header(props) {
  const [collapse, setCollapse] = useState(false);
  const { userById } = useSelector((state) => state.user);

  const isLoggedin = cookie.get("token");

  const handleCollapse = () => setCollapse(!collapse);

  return (
    <header className={["header", props.className].join(" ")}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo />
          <Button
            className="navbar-toggler"
            type="button"
            onClick={handleCollapse}
          >
            {!collapse ? (
              <BarsSVG width="20" height="20" />
            ) : (
              <CloseSVG width="25" height="25" stroke="black" />
            )}
          </Button>

          <div
            className={`${!collapse ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mt-3 mt-lg-0 mb-lg-0">
              {isLoggedin ? (
                <UserProfile
                  name={`${userById.firstName} ${userById.lastName}`}
                  sub={userById.noTelp ? `+62${userById.noTelp}` : ""}
                  imageSrc={
                    userById.image
                      ? `${process.env.API_HOST}/uploads/${userById.image}`
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
                  <div className="d-flex justify-content-around align-items-center">
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
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
