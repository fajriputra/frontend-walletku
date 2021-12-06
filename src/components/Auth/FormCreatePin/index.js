import FormInput from "components/FormInput";
import Button from "components/Button";
import React from "react";
import Figure from "components/Figure";

import { useRouter } from "next/router";

export default function FormCreatePin(props) {
  const router = useRouter();

  if (props.isSuccess) {
    return (
      <div className="right__column">
        <div className="right__column--form">
          <div className="right__column--form--heading mb-0">
            <Figure
              srcImage="../../../../images/icons/icon-check.svg"
              altImage="Icon Checklist"
              className="icon__check--success rounded-circle"
              imageClass="img-cover"
            />
            <h5>Your PIN Was Successfully Created</h5>
            <p>
              Your PIN was successfully created and you can now access all the
              features in WalletKU. Login to your new account and start
              exploring!
            </p>

            <Button
              className="btn btn__link created__pin"
              type="link"
              href="/signin"
            >
              Sign in now
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {router.pathname === "/create-pin" ? (
        <div className="right__column">
          <div className="right__column--form">
            <div className="right__column--form--heading">
              <h5>
                Secure Your Account, Your Wallet,
                <span className="d-md-flex flex-md-column">
                  and Your Data With 6 Digits PIN
                </span>
                That You Created Yourself.
              </h5>
              <p>
                Create 6 digits pin to secure all your money and your data in
                WalletKU app. Keep it secret and don’t tell anyone about your
                WalletKU account password and the PIN.
              </p>
            </div>

            <form
              className="right__column--form--wrapper"
              onSubmit={props.onSubmit}
            >
              <div className="form__pin" style={{ marginBottom: 30 }}>
                <FormInput
                  maxLength="1"
                  inputClassName={["form__input pin", props.classPin].join(" ")}
                  onChange={props.onChange}
                  value={props.pin1}
                  id="pin-1"
                  name="1"
                />
                <FormInput
                  maxLength="1"
                  inputClassName={["form__input pin", props.classPin].join(" ")}
                  onChange={props.onChange}
                  value={props.pin2}
                  id="pin-2"
                  name="2"
                />
                <FormInput
                  maxLength="1"
                  inputClassName={["form__input pin", props.classPin].join(" ")}
                  onChange={props.onChange}
                  value={props.pin3}
                  id="pin-3"
                  name="3"
                />
                <FormInput
                  maxLength="1"
                  inputClassName={["form__input pin", props.classPin].join(" ")}
                  onChange={props.onChange}
                  value={props.pin4}
                  id="pin-4"
                  name="4"
                />
                <FormInput
                  maxLength="1"
                  inputClassName={["form__input pin", props.classPin].join(" ")}
                  onChange={props.onChange}
                  value={props.pin5}
                  id="pin-5"
                  name="5"
                />
                <FormInput
                  maxLength="1"
                  inputClassName={["form__input pin", props.classPin].join(" ")}
                  onChange={props.onChange}
                  value={props.pin6}
                  id="pin-6"
                  name="6"
                />
              </div>

              <p className="error-helpers">{props.displayError}</p>

              <Button
                className={["btn btn__confirm w-100", props.classSubmit].join(
                  " "
                )}
                isLoading={props.isLoading}
                isDisabled={props.isDisabled}
              >
                Confirm
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <form
          className="right__column--form--wrapper"
          onSubmit={props.onSubmit}
        >
          <div className="form__pin" style={{ marginBottom: 30 }}>
            <FormInput
              maxLength="1"
              inputClassName={["form__input pin", props.classPin].join(" ")}
              onChange={props.onChange}
              value={props.pin1}
              id="pin-1"
              name="1"
            />
            <FormInput
              maxLength="1"
              inputClassName={["form__input pin", props.classPin].join(" ")}
              onChange={props.onChange}
              value={props.pin2}
              id="pin-2"
              name="2"
            />
            <FormInput
              maxLength="1"
              inputClassName={["form__input pin", props.classPin].join(" ")}
              onChange={props.onChange}
              value={props.pin3}
              id="pin-3"
              name="3"
            />
            <FormInput
              maxLength="1"
              inputClassName={["form__input pin", props.classPin].join(" ")}
              onChange={props.onChange}
              value={props.pin4}
              id="pin-4"
              name="4"
            />
            <FormInput
              maxLength="1"
              inputClassName={["form__input pin", props.classPin].join(" ")}
              onChange={props.onChange}
              value={props.pin5}
              id="pin-5"
              name="5"
            />
            <FormInput
              maxLength="1"
              inputClassName={["form__input pin", props.classPin].join(" ")}
              onChange={props.onChange}
              value={props.pin6}
              id="pin-6"
              name="6"
            />
          </div>

          <p className="error-helpers">{props.displayError}</p>
        </form>
      )}
    </>
  );
}
