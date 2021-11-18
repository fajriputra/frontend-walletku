import Figure from "components/Figure";
import React from "react";

export default function Features(props) {
  return (
    <section className="features">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-12 col-lg-6 custom__column">
            <Figure
              srcImage="../../../../../images/logo-features.png"
              altImage="Features Image"
              className="features__content--image mx-auto mx-md-0"
              imageClass="img-cover"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="features__content--text">
              <h1 className="features__content--text--heading">
                All The <span className="color__primary">Great</span>
                <span className="d-block">WalletKU Features.</span>
              </h1>
            </div>

            <div className="features__content--card">
              <div className="features__content--card--content">
                <div className="features__content--card--content--list">
                  <h5 className="numbers">1.</h5>
                  <h5 className="text">Small Fee</h5>
                </div>

                <p className="features__content--card--content--text">
                  We only charge 5% of every success transaction done in
                  WalletKU app.
                </p>
              </div>
              <div className="features__content--card--content">
                <div className="features__content--card--content--list">
                  <h5 className="numbers">2.</h5>
                  <h5 className="text">Data Secured</h5>
                </div>

                <p className="features__content--card--content--text">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
              <div className="features__content--card--content mb-0">
                <div className="features__content--card--content--list">
                  <h5 className="numbers">3.</h5>
                  <h5 className="text">User Friendly</h5>
                </div>

                <p className="features__content--card--content--text">
                  WalletKU come up with modern and sleek design and not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
