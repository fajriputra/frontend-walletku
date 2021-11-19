import Button from "components/Button";
import {
  ArrowUpSVG,
  GridSVG,
  LogoutSVG,
  PersonSVG,
  PlusSVG,
} from "components/SVG";
import React from "react";

export default function Sidebar(props) {
  return (
    <aside className="home__link">
      <ul className="home__link--aside">
        <li className="home__link--aside--list">
          <Button
            className="btn btn__sidebar--link"
            type="link"
            href="/dashboard"
          >
            <GridSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Dashboard
          </Button>
        </li>
        <li className="home__link--aside--list">
          <Button
            className="btn btn__sidebar--link"
            type="link"
            href="/transfer"
          >
            <ArrowUpSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Transfer
          </Button>
        </li>
        <li className="home__link--aside--list">
          <Button className="btn btn__sidebar--link" type="link" href="/topup">
            <PlusSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Top Up
          </Button>
        </li>
        <li className="home__link--aside--list mb-0">
          <Button
            className="btn btn__sidebar--link"
            type="link"
            href="/profile"
          >
            <PersonSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Profile
          </Button>
        </li>
        <li className="home__link--aside--list logout">
          <Button className="btn btn__sidebar--link">
            <LogoutSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Logout
          </Button>
        </li>
      </ul>
    </aside>
  );
}
