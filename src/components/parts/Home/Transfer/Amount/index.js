import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "components/Button";
import FormInput from "components/FormInput";
import UserProfile from "components/UserProfile";
import { formatRp } from "helpers/formatRp";

export default function Amount(props) {
  const { data, handlePrev, handleNext, onChange, amount, notes, underValue } =
    props;

  const { userById } = useSelector((state) => state.user);
  const [container, setContainer] = useState({});

  useEffect(() => {
    setContainer({
      ...data,
      receiverId: data.id,
      balanceLeft: userById.balance - data.amount,
      date: new Date().toISOString().split("T")[0],
    });
  }, [data, userById.balance]);

  return (
    <div className="amount__card">
      <div className="amount__card--head">
        <h6 className="text__heading">Transfer Money</h6>
      </div>

      <UserProfile
        name={`${data.firstName} ${data.lastName}`}
        sub={data.noTelp ? `+62${data.noTelp}` : ""}
        imageSrc={
          data.image
            ? `${process.env.API_HOST}/uploads/${data.image}`
            : "/images/default.png"
        }
        className="card__shadow"
      />

      <p className="text__display--info">
        Type the amount you want to transfer and then
        <span className="d-md-block"> press continue to the next steps. </span>
      </p>

      <div className="row justify-content-center mx-auto custom__row">
        <div className="form-group position-relative">
          <FormInput
            type="number"
            placeholder="0.00"
            inputClassName={["form__input--amount", props.classAmount].join(
              " "
            )}
            onChange={onChange}
            value={amount}
            name="amount"
          />

          {underValue && (
            <p
              style={{
                color: "#ff5b37",
                textAlign: "center",
                marginTop: "0.625rem",
                marginBottom: 0,
              }}
            >
              Minimum {formatRp(1000)} to transfer
            </p>
          )}
        </div>

        <p className="text__display--amount">
          {formatRp(userById.balance)} Available
        </p>

        <div className="form-group position-relative">
          <FormInput
            placeholder="Add some notes..."
            inputClassName="form__input--notes"
            onChange={onChange}
            value={notes}
            name="notes"
          />
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
        <Button className="btn btn__continue mb-3 mb-md-0" onClick={handlePrev}>
          Back
        </Button>
        <Button
          className="btn btn__continue"
          onClick={() => handleNext(container)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
