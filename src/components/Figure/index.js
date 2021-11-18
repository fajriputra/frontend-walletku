/* eslint-disable @next/next/no-img-element */
import React from "react";
import propTypes from "prop-types";

export default function Figure(props) {
  return (
    <figure className={props.className} onClick={props.onClick}>
      <img
        src={props.srcImage}
        alt={props.altImage}
        className={props.imageClass}
      />
    </figure>
  );
}

Figure.propTypes = {
  className: propTypes.string,
  srcImage: propTypes.string,
  altImage: propTypes.string,
  imageClass: propTypes.string,
};
