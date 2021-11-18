import React from "react";

import Figure from "components/Figure";
import Button from "components/Button";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Figure
              srcImage="../../../../../images/hero-image-phone.png"
              altImage="Hero Image"
              className="hero__image mx-auto mx-md-0"
              imageClass="img-cover"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="hero__content">
              <div className="hero__content--text">
                <h1 className="hero__content--text--heading">
                  Awesome App{" "}
                  <span className="d-block">
                    For Saving <span className="color__primary">Time.</span>
                  </span>
                </h1>
                <p className="hero__content--text--subheading">
                  We bring you a mobile app for banking problems that{" "}
                  <span className="d-md-block">
                    oftenly wasting much of your times.
                  </span>
                </p>

                <Button className="btn btn__try">Try It Free</Button>

                <p className="hero__content--text--available">Available on</p>

                <div className="d-flex">
                  <Figure
                    srcImage="../../../../../images/icons/icon-gplay.svg"
                    altImage="Icon GPlay"
                    className="icon__hero gplay"
                    imageClass="img-contain"
                  />
                  <Figure
                    srcImage="../../../../../images/icons/icon-apple.svg"
                    altImage="Icon Apple"
                    className="icon__hero apple"
                    imageClass="img-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
