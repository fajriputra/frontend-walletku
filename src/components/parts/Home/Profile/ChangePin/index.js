import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "helpers/axios";
import FormCreatePin from "components/Auth/FormCreatePin";
import Button from "components/Button";
import { toast } from "react-toastify";

export default function ChangePin(props) {
  const [steps, setSteps] = useState(0);
  const [pin, setPin] = useState({});
  const [loading, setLoading] = useState(false);

  const { userById } = useSelector((state) => state.user);
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(e.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }

    setPin({ ...pin, [`pin${e.target.name}`]: e.target.value });
  };

  const handleNextStep = (e) => {
    setLoading(true);

    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

    axios
      .get(`/user/pin?pin=${allPin}`)
      .then(() => {
        setSteps(steps + 1);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setPin({
          ...pin,
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: "",
          pin5: "",
          pin6: "",
        });
      })
      .finally(() => {
        setLoading(false);
        setPin({
          ...pin,
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: "",
          pin5: "",
          pin6: "",
        });
      });
  };

  const handleUpdatePin = () => {
    setLoading(true);

    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

    const setData = {
      pin: allPin,
    };

    axios
      .patch(`/user/pin/${userById.id}`, setData)
      .then((res) => {
        toast.success(res.data.msg);

        router.push("/dashboard");
      })
      .finally(() => {
        setLoading(false);
        setPin({
          ...pin,
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: "",
          pin5: "",
          pin6: "",
        });
      });
  };

  return (
    <div className="change__pin--card">
      <div className="change__pin--card--head">
        <div className="change__pin--card--head--inner">
          <h5>Change PIN</h5>
          <p>
            Enter your {steps === 0 && "current"} 6 digits WalletKU PIN below to
            <span className="d-md-block">
              {" "}
              {steps === 0 ? "continue to the next steps." : "change your pin."}
            </span>
          </p>
        </div>

        <span className="back" onClick={props.handlePrev}>
          Back
        </span>
      </div>

      <div className="change__pin--card--body">
        {steps === 0 && (
          <FormCreatePin
            onChange={(e) => handleChange(e)}
            pin1={pin.pin1}
            pin2={pin.pin2}
            pin3={pin.pin3}
            pin4={pin.pin4}
            pin5={pin.pin5}
            pin6={pin.pin6}
          />
        )}

        {steps === 1 && (
          <FormCreatePin
            onChange={(e) => handleChange(e)}
            pin1={pin.pin1}
            pin2={pin.pin2}
            pin3={pin.pin3}
            pin4={pin.pin4}
            pin5={pin.pin5}
            pin6={pin.pin6}
          />
        )}
        <Button
          className="btn btn__change--pin w-100"
          isLoading={loading}
          onClick={steps === 0 ? handleNextStep : handleUpdatePin}
        >
          {steps === 0 ? "Continue" : "Update pin"}
        </Button>
      </div>
    </div>
  );
}
