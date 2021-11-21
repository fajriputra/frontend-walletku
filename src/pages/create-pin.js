import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "helpers/axios";
import { useRouter } from "next/router";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function CreatePin(props) {
  const [pin, setPin] = useState({});
  const [error, setError] = useState("");
  const [status, setStatus] = useState(statusList.idle);
  const { data } = useSelector((state) => state.user);

  const router = useRouter();

  const addPin = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(statusList.process);
    try {
      const allPin =
        pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

      const setData = {
        pin: allPin,
      };

      await axios.patch(`/user/pin/${data.id}`, setData);

      router.push("/dashboard");

      setStatus(statusList.error);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);

      setTimeout(() => {
        setError("");
      }, 3000);
    }
    setStatus(statusList.success);
  };

  const isDisabled = Object.values(pin).length > 0 && true;

  return (
    <Layout pageTitle="Create PIN" isAuth>
      <section className="reset__password mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn
              createPin
              onSubmit={handleSubmit}
              onChange={(e) => addPin(e)}
              classSubmit={pin && isDisabled ? " active" : ""}
              isDisabled={!isDisabled}
              isLoading={status === statusList.process}
              displayError={error}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
