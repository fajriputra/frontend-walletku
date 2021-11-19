import FormInput from "components/FormInput";
import Button from "components/Button";
import React from "react";
import Figure from "components/Figure";
import Pin from "components/Pin";

export default function FormCreatePin(props) {
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

        <Pin>
          <Button className="btn__confirm">Confirm</Button>
        </Pin>
      </div>
    </div>
  );
}
