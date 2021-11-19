import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Layout from "components/Layout";
import React from "react";

export default function Signin(props) {
  return (
    <Layout pageTitle="Sign In" isAuth>
      <section className="signin mb-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <LeftColumn />
          </div>
          <div className="col-lg-6">
            <RightColumn />
          </div>
        </div>
      </section>
    </Layout>
  );
}
