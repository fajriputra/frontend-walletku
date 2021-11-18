/* eslint-disable react/display-name */
import React from "react";
import propTypes from "prop-types";

const FormInput = React.forwardRef(
  (
    {
      name,
      type,
      value,
      id,
      maxLength,
      isDisabled,
      placeholder,
      outerClassName,
      inputTextClassName,
      prepend,
      append,
      inputClassName,
      onKeyUp,
      onKeyPress,
      onChange,
    },
    ref
  ) => (
    <>
      <div className={["input-text", outerClassName].join(" ")}>
        <div className="input-group">
          {prepend && (
            <div className="input-group-prepend">
              <span className="input-group-text">{prepend}</span>
            </div>
          )}
          <input
            type={type}
            name={name}
            value={value}
            id={id}
            disabled={isDisabled}
            className={["form-control", inputClassName].join(" ")}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyPress={onKeyPress}
            ref={ref}
            maxLength={maxLength}
          />
          {append && (
            <div className="input-group-append">
              <span
                className={["input-group-text", inputTextClassName].join(" ")}
              >
                {append}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
);

export default FormInput;

FormInput.defaultProps = {
  type: "text",
};

FormInput.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  maxLength: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isDisabled: propTypes.bool,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  onKeyUp: propTypes.func,
  onKeyPress: propTypes.func,
  inputClassName: propTypes.string,
};
