import React from "react";
import Button from "components/Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content--copyright">
          2021 WalletKU. All right reserved.
        </p>
        <div className="footer__content--info">
          <Button
            type="link"
            isExternal
            target="_blank"
            href="tel:+62563788829901"
          >
            +62 5637 8882 9901
          </Button>
          <Button
            type="link"
            isExternal
            target="_blank"
            href="mailto:contact@zwallet.com"
          >
            contact@walletku.com
          </Button>
        </div>
      </div>
    </footer>
  );
}
