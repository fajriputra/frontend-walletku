import Figure from "components/Figure";
import React from "react";

export default function Partners(props) {
  return (
    <section className="partners">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-12 col-lg-6">
            <div className="partners__content--text">
              <h1 className="partners__content--text--heading">
                100+ <span className="color__primary">Trusted</span> Partners.
              </h1>
              <p className="partners__content--text--subheading">
                We have reached global level and have 100+
                <span className="d-block">
                  {" "}
                  brand partners around the globe.{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="partners__content--wrapper">
              <Figure
                className="partners__content--wrapper--image mx-auto mx-0"
                srcImage="../../../../images/logo-airbnb.png"
                altImage="AirBnB"
                imageClass="img-contain"
              />
              <Figure
                className="partners__content--wrapper--image mx-auto mx-0"
                srcImage="../../../../images/logo-canon.png"
                altImage="Cannon"
                imageClass="img-contain"
              />
              <Figure
                className="partners__content--wrapper--image mx-auto mx-0"
                srcImage="../../../../images/logo-dell.png"
                altImage="DELL"
                imageClass="img-contain"
              />
              <Figure
                className="partners__content--wrapper--image mx-auto mx-0"
                srcImage="../../../../images/logo-microsoft.png"
                altImage="Microsoft"
                imageClass="img-contain"
              />
              <Figure
                className="partners__content--wrapper--image mx-auto mx-0"
                srcImage="../../../../images/logo-dropbox.png"
                altImage="Dropbox"
                imageClass="img-contain"
              />
              <Figure
                className="partners__content--wrapper--image mx-auto mx-0"
                srcImage="../../../../images/logo-hnm.png"
                altImage="Hnm"
                imageClass="img-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
