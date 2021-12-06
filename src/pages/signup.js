import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "helpers/axios";

import { getDataCookie } from "middlewares/authorizationPage";
import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmation_password: "",
  error: "",
  success: "",
};

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
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

export default function Signup(props) {
  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);

  const router = useRouter();

  const { firstName, lastName, email, password, confirmation_password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(statusList.process);
    try {
      if (password !== confirmation_password) {
        setUser({ ...user, error: "Password doesn't matches" });
        return setStatus(statusList.idle);
      }

      const res = await axios.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
        confirmation_password,
      });

      toast.success(res.data.msg);

      setUser(initialState);

      router.push("/signin");

      setStatus(statusList.error);
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, error: err.response.data.msg });

      setTimeout(() => {
        setUser(initialState);
      }, 3000);
    }
    setStatus(statusList.success);
  };

  return (
    <Layout pageTitle="Sign Up" isAuth>
      <section className="signup mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn
              isSignup
              onSubmit={handleSubmit}
              onChange={handleChange}
              firstname={user.firstName}
              classFirstname={user.firstName ? " active" : ""}
              lastname={user.lastName}
              classLastname={user.lastName ? " active" : ""}
              email={user.email}
              classEmail={user.email ? " active" : ""}
              password={user.password}
              classPassword={user.password ? " active" : ""}
              confirmPassword={user.confirmation_password}
              classConfirm={user.confirmation_password ? " active" : ""}
              strokePerson1={user.firstName ? "#6379f4" : "#a9a9a9"}
              strokePerson2={user.lastName ? "#6379f4" : "#a9a9a9"}
              strokeEmail={user.email ? "#6379f4" : "#a9a9a9"}
              strokeLock={user.password ? "#6379f4" : "#a9a9a9"}
              strokeLock2={user.confirmation_password ? "#6379f4" : "#a9a9a9"}
              isLoading={status === statusList.process}
              classSubmit={user.email && user.password ? " active" : ""}
              displayError={user.error}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
