import React from "react";

import Button from "components/Button";
import Footer from "components/Footer";

export default function SiteInfo(props) {
  return (
    <section className="siteinfo">
      <div className="container">
        <div className="siteinfo__content">
          <Button className="siteinfo__content--image" type="link" href="/">
            <span className="siteinfo__content--image--text">WalletKU</span>
          </Button>
          <p className="siteinfo__content--text mt-3 mt-md-4">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
        </div>

        <Footer />
      </div>
    </section>
  );
}
