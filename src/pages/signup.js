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
  loading: false,
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

  const router = useRouter();

  const { firstName, lastName, email, password, confirmation_password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, loading: true });

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmation_password
    ) {
      setUser({
        ...user,
        error: "Please fill all fields",
      });
      return setTimeout(() => {
        setUser(initialState);
      }, 3000);
    }

    if (password.length < 6) {
      setUser({
        ...user,
        error: "Password must be at least 6 characters",
      });
      return setTimeout(() => {
        setUser({
          ...user,
          error: "",
          password: "",
          confirmation_password: "",
          loading: false,
        });
      }, 3000);
    }

    if (password !== confirmation_password) {
      setUser({
        ...user,
        error: "Password doesn't matches",
      });
      return setTimeout(() => {
        setUser({
          ...user,
          error: "",
          password: "",
          confirmation_password: "",
        });
      }, 3000);
    }

    axios
      .post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
        confirmation_password,
      })
      .then((res) => {
        toast.success(res.data.msg);

        router.push("/signin");
      })
      .catch((err) => {
        err.response.data.msg &&
          setUser({ ...user, error: err.response.data.msg });

        setTimeout(() => {
          setUser(initialState);
        }, 3000);
      })
      .finally(() => {
        setUser(initialState);
      });
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
              isLoading={user.loading}
              classSubmit={user.email && user.password ? " active" : ""}
              displayError={user.error}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
