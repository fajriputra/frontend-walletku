import Button from "components/Button";
import React from "react";

export default function Logo(props) {
  return (
    <Button className="navbar-brand" type="link" href="/">
      <span className="navbar-brand--text">WalletKU</span>
    </Button>
  );
}
