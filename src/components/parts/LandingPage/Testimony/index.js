import Figure from "components/Figure";
import React from "react";

export default function Testimony() {
  return (
    <section className="testimony">
      <div className="container">
        <div className="row">
          <div className="testimony__content">
            <div className="testimony__content--text">
              <h1 className="testimony__content--text--heading">
                What Users are <span className="color__primary">Saying.</span>
              </h1>
              <p className="testimony__content--text--subheading">
                We have some great features from the application and it’s
                totally free
                <span className="d-md-block">
                  to use by all users around the world.
                </span>
              </p>
            </div>

            <div className="testimony__content--wrapper">
              <div className="testimony__content--wrapper--card">
                <Figure
                  className="testimony__content--wrapper--card--image mx-auto"
                  srcImage="../../../../../images/testimony1.png"
                  altImage="User Image"
                  imageClass="img-cover"
                />

                <div className="testimony__content--wrapper--card--text">
                  <h5 className="name">Sherina Chaw</h5>
                  <p className="desc">
                    “I use this app since 2 years ago and this is the best app
                    that I’ve ever use in my entire life”
                  </p>
                </div>
              </div>
              <div className="testimony__content--wrapper--card">
                <Figure
                  className="testimony__content--wrapper--card--image mx-auto"
                  srcImage="../../../../../images/testimony1.png"
                  altImage="User Image"
                  imageClass="img-cover"
                />

                <div className="testimony__content--wrapper--card--text">
                  <h5 className="name">Sherina Chaw</h5>
                  <p className="desc">
                    “I use this app since 2 years ago and this is the best app
                    that I’ve ever use in my entire life”
                  </p>
                </div>
              </div>
              <div className="testimony__content--wrapper--card">
                <Figure
                  className="testimony__content--wrapper--card--image mx-auto"
                  srcImage="../../../../../images/testimony1.png"
                  altImage="User Image"
                  imageClass="img-cover"
                />

                <div className="testimony__content--wrapper--card--text">
                  <h5 className="name">Sherina Chaw</h5>
                  <p className="desc">
                    “I use this app since 2 years ago and this is the best app
                    that I’ve ever use in my entire life”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
