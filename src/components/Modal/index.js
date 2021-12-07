import React, { useRef, useCallback, useEffect } from "react";
import Button from "components/Button";
import { CloseSVG } from "components/SVG";
import FormInput from "components/FormInput";
import FormCreatePin from "components/Auth/FormCreatePin";

export default function Modal(props) {
  const refModal = useRef(null);

  const {
    showModal,
    setShowModal,
    isTransfer,
    submit,
    value,
    name,
    onChange,
    isLoading,
  } = props;

  const handleClose = (e) => {
    if (refModal.current === e.target) {
      setShowModal(false);
    }
  };

  const escapePress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escapePress);

    return () => document.removeEventListener("keydown", escapePress);
  }, [escapePress]);

  return (
    <>
      {showModal ? (
        <div className="backdrop" onClick={handleClose} ref={refModal}>
          <div className="modal__wrapper">
            <div className="modal__wrapper--content">
              <div className="modal__wrapper--content--head">
                <h6 className="modal__wrapper--content--head--text">
                  {isTransfer ? "Enter PIN to Transfer" : "Top Up"}
                </h6>

                <CloseSVG
                  width="28"
                  height="28"
                  className="icon__close"
                  stroke="#A9A9A9"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </div>

              {isTransfer ? (
                <p className="modal__wrapper--content--display">
                  Enter your 6 digits PIN for confirmation{" "}
                  <span className="d-md-block">
                    to continue transferring money.
                  </span>
                </p>
              ) : (
                <p className="modal__wrapper--content--display">
                  Enter the amount of money, and click
                  <span className="d-md-block">submit</span>
                </p>
              )}

              {isTransfer ? (
                <FormCreatePin
                  onChange={props.onChange}
                  pin1={props.pin1}
                  pin2={props.pin2}
                  pin3={props.pin3}
                  pin4={props.pin4}
                  pin5={props.pin5}
                  pin6={props.pin6}
                />
              ) : (
                <div className="form-group position-relative mb-5">
                  <FormInput
                    inputClassName="top-up"
                    onChange={onChange}
                    value={value}
                    name={name}
                    type="number"
                  />
                </div>
              )}

              <div className="d-flex justify-content-end">
                <Button
                  className="btn btn__continue"
                  onClick={submit}
                  isLoading={isLoading}
                >
                  {isTransfer ? "Continue" : "Submit"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
