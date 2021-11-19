import Button from "components/Button";
import Figure from "components/Figure";
import FormInput from "components/FormInput";

export default function FormResetPassword(props) {
  if (props.isConfirmPassword) {
    return (
      <div className="right__column">
        <div className="right__column--form">
          <div className="right__column--form--heading">
            <h5>
              Did You Forgot Your Password?{" "}
              <span className="d-md-flex flex-md-column">
                Don’t Worry, You Can Reset Your
              </span>
              Password In a Minutes.
            </h5>
            <p>
              Now you can create a new password for your WalletKU account. Type
              your password twice so we can confirm your new passsword.
            </p>
          </div>

          <form className="right__column--form--wrapper">
            <div className="form-group position-relative">
              <FormInput
                placeholder="Create your new password"
                inputClassName="form__input"
              />
              <Figure
                srcImage="../../../../images/icons/icon-lock.svg"
                altImage="Icon Lock"
                className="icon"
                imageClass="img-cover"
              />
              <Figure
                srcImage="../../../../images/icons/icon-eye-crossed.svg"
                altImage="Icon Eye"
                className="icon eye"
                imageClass="img-cover"
              />
            </div>
            <div className="form-group position-relative mb-3">
              <FormInput
                placeholder="Confirm your new password"
                inputClassName="form__input"
              />
              <Figure
                srcImage="../../../../images/icons/icon-lock.svg"
                altImage="Icon Lock"
                className="icon"
                imageClass="img-cover"
              />
              <Figure
                srcImage="../../../../images/icons/icon-eye-crossed.svg"
                altImage="Icon Eye"
                className="icon eye"
                imageClass="img-cover"
              />
            </div>

            <Button className="btn__reset">Reset Password</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="right__column">
      <div className="right__column--form">
        <div className="right__column--form--heading">
          <h5>
            Did You Forgot Your Password?{" "}
            <span className="d-md-flex flex-md-column">
              Don’t Worry, You Can Reset Your
            </span>
            Password In a Minutes.
          </h5>
          <p>
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
        </div>

        <form className="right__column--form--wrapper">
          <div className="form-group position-relative">
            <FormInput
              placeholder="Enter your e-mail"
              type="email"
              inputClassName="form__input"
            />
            <Figure
              srcImage="../../../../images/icons/icon-email.svg"
              altImage="Icon Email"
              className="icon"
              imageClass="img-cover"
            />
          </div>

          <Button className="btn__confirm">Confirm</Button>
        </form>
      </div>
    </div>
  );
}
