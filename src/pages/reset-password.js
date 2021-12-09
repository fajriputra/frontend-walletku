import React, { useState } from "react";

import axios from "helpers/axios";
import { getDataCookie } from "middlewares/authorizationPage";
import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  linkDirect: "https://walletku.vercel.app/confirm-password",
  error: "",
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

export default function ResetPassword(props) {
  const [form, setForm] = useState(initialState);

  const { email, linkDirect } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({ ...form, loading: true });

    if (!email) {
      setForm({
        ...form,
        error: "Email must be filled",
      });
      return setTimeout(() => {
        setForm(initialState);
      }, 3000);
    }

    axios
      .post("/auth/forgot-password", {
        email,
        linkDirect,
      })
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      })
      .finally(() => {
        setForm(initialState);
      });
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
              isLoading={form.loading}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
