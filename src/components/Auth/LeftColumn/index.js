import React from "react";

import Button from "components/Button";
import Figure from "components/Figure";

export default function LeftColumn(props) {
  return (
    <div className="left__column d-none d-md-block">
      <div className="left__column--content">
        <Button className="left__column--content--wrapper" type="link" href="/">
          <span className="left__column--content--wrapper--text">WalletKU</span>
        </Button>
        <div className="left__column--content--inner">
          <Figure
            className="left__column--content--inner--wrapper"
            srcImage="../../../../images/images-phone-auth.png"
            altImage="Background Auth Phone"
            imageClass="img-cover"
          />

          <div className="left__column--content--inner--text">
            <h5>App that Covering Banking Needs.</h5>
            <p>
              WalletKU is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in WalletKU everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>

        <Figure
          className="icon__wave--wrapper mb-0"
          srcImage="../../../../images/icons/icon-wave-auth.svg"
          altImage="Wave"
          imageClass="img-cover"
        />
      </div>
    </div>
  );
}
