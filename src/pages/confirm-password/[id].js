import React, { useState } from "react";
import axios from "helpers/axios";
import { useRouter } from "next/router";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";

const initialState = {
  keysChangePassword: "",
  newPassword: "",
  confirmPassword: "",
  error: "",
};

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function ConfirmPassword(props) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);

  const router = useRouter();

  const { newPassword, confirmPassword, keysChangePassword } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus(statusList.process);
    try {
      if (newPassword !== confirmPassword) {
        setForm({ ...form, error: "Password doesn't matches" });
        return setStatus(statusList.idle);
      }

      await axios.patch(`/auth/reset-password`, {
        keysChangePassword: router.query.id,
        newPassword,
        confirmPassword,
      });

      router.push("/signin");

      setStatus(statusList.error);
    } catch (err) {
      err.response.data.msg &&
        setForm({ ...form, error: err.response.data.msg });

      setTimeout(() => {
        setForm(initialState);
      }, 3000);
    }
    setStatus(statusList.success);
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
              password={form.newPassword}
              confirm={form.confirmPassword}
              classNewPassword={form.newPassword ? "active" : ""}
              classConfirm={form.confirmPassword ? "active" : ""}
              strokeLock={form.newPassword ? "#6379F4" : "#A9A9A9"}
              strokeLock2={form.confirmPassword ? "#6379F4" : "#A9A9A9"}
              isLoading={status === statusList.process}
              displayError={form.error}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
