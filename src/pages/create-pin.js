import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "helpers/axios";
import { getDataCookie } from "middlewares/authorizationPage";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function CreatePin(props) {
  const [pin, setPin] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { userById } = useSelector((state) => state.user);

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
      .catch((err) => {
        err.response.data.msg && setError(err.response.data.msg);

        setTimeout(() => {
          setError("");
        }, 3000);

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
              isLoading={loading}
              displayError={error}
              pin1={pin.pin1}
              pin2={pin.pin2}
              pin3={pin.pin3}
              pin4={pin.pin4}
              pin5={pin.pin5}
              pin6={pin.pin6}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
