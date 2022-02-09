import React from "react";

import Figure from "components/Figure";

export default function UserProfile(props) {
  return (
    <>
      <div
        className={["user__profile", props.className].join(" ")}
        onClick={props.onClick}
      >
        <div
          className={["user__profile--data", props.innerClassName].join(" ")}
        >
          <Figure
            srcImage={props.imageSrc}
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
