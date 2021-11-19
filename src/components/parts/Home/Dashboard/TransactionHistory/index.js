import UserProfile from "components/UserProfile";
import React from "react";

export default function TransactionHistory(props) {
  return (
    <div className="transaction__history--card">
      <div className="transaction__history--card--head">
        <h6 className="transaction__history--text">Transaction History</h6>
        <div className="dropdown">
          <button className="btn dropdown__toggle" type="button">
            --Select Filter--
          </button>
        </div>
      </div>

      <UserProfile name="Walid Nurudin" sub="Transfer">
        <p className="text__amount--transaction">+Rp50.000</p>
      </UserProfile>

      {/* <div className="user__profile--history">
        <div className="user__profile--history--list">
          <div className="user__profile--data">
            <figure className="user__profile--image">
              <img
                src="images/testimony1.png"
                alt="profile image"
                className="img-cover"
              />
            </figure>

            <div className="user__profile--data--display">
              <h6 className="user__profile--display--name">Robert Chandler</h6>
              <p className="user__profile--display--category">Accept</p>
            </div>
          </div>
          <p className="text__amount--transaction">+Rp50.000</p>
        </div>
        <div className="user__profile--history--list">
          <div className="user__profile--data">
            <figure className="user__profile--image">
              <img
                src="images/testimony1.png"
                alt="profile image"
                className="img-cover"
              />
            </figure>

            <div className="user__profile--data--display">
              <h6 className="user__profile--display--name">Robert Chandler</h6>
              <p className="user__profile--display--category">Accept</p>
            </div>
          </div>
          <p className="text__amount--transaction">+Rp50.000</p>
        </div>
        <div className="user__profile--history--list">
          <div className="user__profile--data">
            <figure className="user__profile--image">
              <img
                src="images/testimony1.png"
                alt="profile image"
                className="img-cover"
              />
            </figure>

            <div className="user__profile--data--display">
              <h6 className="user__profile--display--name">Robert Chandler</h6>
              <p className="user__profile--display--category">Accept</p>
            </div>
          </div>
          <p className="text__amount--transaction">+Rp50.000</p>
        </div>
        <div className="user__profile--history--list">
          <div className="user__profile--data">
            <figure className="user__profile--image">
              <img
                src="images/testimony1.png"
                alt="profile image"
                className="img-cover"
              />
            </figure>

            <div className="user__profile--data--display">
              <h6 className="user__profile--display--name">Robert Chandler</h6>
              <p className="user__profile--display--category">Accept</p>
            </div>
          </div>
          <p className="text__amount--transaction">+Rp50.000</p>
        </div>
      </div> */}
    </div>
  );
}
