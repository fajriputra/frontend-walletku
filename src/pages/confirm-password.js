import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import React from "react";

export default function ResetPassword(props) {
  return (
    <Layout pageTitle="Confirm Password" isAuth>
      <section className="reset__password mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn isConfirm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
