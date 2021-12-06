import React, { useState } from "react";

import axios from "helpers/axios";
import { getDataCookie } from "middlewares/authorizationPage";
import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  linkDirect: "http://localhost:3000/confirm-password",
  error: "",
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

export default function ResetPassword(props) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);

  const { email, linkDirect } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus(statusList.process);
    try {
      const res = await axios.post("/auth/forgot-password", {
        email,
        linkDirect,
      });

      toast.success(res.data.msg);

      setForm(initialState);
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
    <Layout pageTitle="Reset Password" isAuth>
      <section className="reset__password mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn
              isReset
              onChange={handleChange}
              onSubmit={handleSubmit}
              email={form.email}
              strokeEmail={form.email ? "#6379F4" : "#A9A9A9"}
              formClassReset={form.email ? "active" : ""}
              displayError={form.error}
              isLoading={status === statusList.process}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
