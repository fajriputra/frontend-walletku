import React from "react";

import Figure from "components/Figure";
import Button from "components/Button";

export default function UserProfile(props) {
  return (
    <>
      <div className="user__profile" onClick={props.onClick}>
        <div className="user__profile--data">
          <Figure
            srcImage="../../../images/testimony1.png"
            altImage="Profile Image"
            className="user__profile--image"
            imageClass="img-cover border__inherit"
          />

          <div className="user__profile--data--display">
            <h6
              className={[
                "user__profile--data--display--name",
                props.className,
              ].join(" ")}
            >
              {props.name}
            </h6>
            <p className="user__profile--data--display--sub">{props.sub}</p>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}
