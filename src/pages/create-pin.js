import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import React from "react";

export default function ResetPassword(props) {
  return (
    <Layout pageTitle="Create PIN" isAuth>
      <section className="reset__password">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn createPin />
          </div>
        </div>
      </section>
    </Layout>
  );
}
