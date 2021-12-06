import Figure from "components/Figure";
import { DownloadSVG, LockSVG, PhoneSVG } from "components/SVG";
import React from "react";

export default function About(props) {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__content--text">
            <h1 className="about__content--text--heading">
              <span className="color__primary">About</span> the Application.
            </h1>
            <p className="about__content--text--subheading">
              We have some great features from the application and it’s totally
              free{" "}
              <span className="d-md-block">
                to use by all users around the world.
              </span>
            </p>
          </div>

          <div className="about__content--inner">
            <div className="about__content--inner--card">
              <div className="about__content--inner--card--content">
                <div className="about__content--inner--card--content--image rounded-circle">
                  <PhoneSVG width="25" height="25" stroke="#6379F4" />
                </div>

                <h5>24/7 Support</h5>
                <p>
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
              <div className="about__content--inner--card--content">
                <div className="about__content--inner--card--content--image rounded-circle">
                  <LockSVG width="25" height="25" stroke="#6379F4" />
                </div>

                <h5>Data Privacy</h5>
                <p>
                  We make sure your data is safe in our database and we will
                  encrypt any data you submitted to us.
                </p>
              </div>
              <div className="about__content--inner--card--content mb-0">
                <div className="about__content--inner--card--content--image rounded-circle">
                  <DownloadSVG width="25" height="25" stroke="#6379F4" />
                </div>

                <h5>Easy Download</h5>
                <p>
                  WalletKU is 100% totally free to use it’s now available on
                  Google Play Store and App Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
