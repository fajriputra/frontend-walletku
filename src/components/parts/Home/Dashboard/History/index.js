import React from "react";
import UserProfile from "components/UserProfile";
import Button from "components/Button";

export default function History(props) {
  return (
    <>
      <UserProfile name="Robert Chandler" sub="Accept" className="f-16">
        <p className="text__amount--transaction">+Rp50.000</p>
      </UserProfile>
      <UserProfile name="Robert Chandler" sub="Accept" className="f-16">
        <p className="text__amount--transaction">+Rp50.000</p>
      </UserProfile>
      <UserProfile name="Robert Chandler" sub="Accept" className="f-16">
        <p className="text__amount--transaction">+Rp50.000</p>
      </UserProfile>
      <UserProfile name="Robert Chandler" sub="Accept" className="f-16">
        <p className="text__amount--transaction">+Rp50.000</p>
      </UserProfile>
    </>
  );
}
