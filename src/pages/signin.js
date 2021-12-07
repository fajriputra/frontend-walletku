import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { userLogin } from "stores/auth/actions";
import { getDataCookie } from "middlewares/authorizationPage";
import { getUserById } from "stores/user/actions";
import cookie from "js-cookie";
import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
  error: "",
};

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

export default function Signin(props) {
  const [user, setUser] = useState(initialState);

  const { email, password } = user;

  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const isDisabled = password.split("").length >= 6 && true;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin({ email, password }))
      .then((res) => {
        toast.success(res.value.data.msg);

        cookie.set("token", res.value.data.data.token);
        cookie.set("id", res.value.data.data.id);

        const pin = res.value.data.data.pin;

        dispatch(getUserById(res.value.data.data.id)).then(() => {
          if (pin) {
            router.push("/dashboard");
          } else {
            router.push("/create-pin");
          }
        });
      })
      .catch((err) => {
        err.response.data.msg &&
          setUser({ ...user, error: err.response.data.msg });

        setTimeout(() => {
          setUser(initialState);
        }, 3000);
      });
  };

  return (
    <Layout pageTitle="Sign In" isAuth>
      <section className="signin mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn
              onSubmit={handleSubmit}
              onChange={handleChange}
              email={user.email}
              password={user.password}
              strokeEmail={user.email ? "#6379f4" : "#a9a9a9"}
              strokeLock={user.password ? "#6379f4" : "#a9a9a9"}
              classEmail={user.email ? " active" : ""}
              classPassword={user.password ? " active" : ""}
              classSubmit={
                user.email && user.password && isDisabled ? " active" : ""
              }
              displayError={user.error}
              isLoading={isLoading}
              isDisabled={!isDisabled}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
