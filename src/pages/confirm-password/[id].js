import React, { useState } from "react";
import axios from "helpers/axios";
import { useRouter } from "next/router";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import { toast } from "react-toastify";

const initialState = {
  keysChangePassword: "",
  newPassword: "",
  confirmPassword: "",
  error: "",
  loading: false,
};

export default function ConfirmPassword(props) {
  const [user, setUser] = useState(initialState);

  const router = useRouter();

  const { newPassword, confirmPassword, keysChangePassword } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUser({ ...user, loading: true });

    if (!newPassword || !confirmPassword) {
      setUser({
        ...user,
        error: "Please fill all fields",
      });
      return setTimeout(() => {
        setUser(initialState);
      }, 3000);
    }

    if (newPassword.length < 6) {
      setUser({
        ...user,
        error: "Password must be at least 6 characters",
      });
      return setTimeout(() => {
        setUser({
          ...user,
          error: "",
          newPassword: "",
          confirmPassword: "",
          loading: false,
        });
      });
    }

    if (newPassword !== confirmPassword) {
      setUser({
        ...user,
        error: "Password doesn't matches",
      });
      return setTimeout(() => {
        setUser({
          ...user,
          error: "",
          newPassword: "",
          confirmPassword: "",
        });
      });
    }

    axios
      .patch(`/auth/reset-password`, {
        keysChangePassword: router.query.id,
        newPassword,
        confirmPassword,
      })
      .then((res) => {
        toast.success(res.data.msg);

        router.push("/signin");
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      })
      .finally(() => {
        setUser(initialState);
      });
  };

  return (
    <Layout pageTitle="Confirm Password" isAuth>
      <section className="reset__password mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn
              isConfirm
              onSubmit={handleSubmit}
              onChange={handleChange}
              password={user.newPassword}
              confirm={user.confirmPassword}
              classNewPassword={user.newPassword ? "active" : ""}
              classConfirm={user.confirmPassword ? "active" : ""}
              strokeLock={user.newPassword ? "#6379F4" : "#A9A9A9"}
              strokeLock2={user.confirmPassword ? "#6379F4" : "#A9A9A9"}
              isLoading={user.loading}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
