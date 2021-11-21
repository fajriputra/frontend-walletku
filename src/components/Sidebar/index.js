import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "components/Button";
import {
  ArrowUpSVG,
  GridSVG,
  LogoutSVG,
  PersonSVG,
  PlusSVG,
} from "components/SVG";

export default function Sidebar(props) {
  const router = useRouter();

  const activeClass = (path) => {
    return router.pathname === path ? " active" : "";
  };

  return (
    <aside className="home__link">
      <ul className="home__link--aside">
        <li className="home__link--aside--list">
          <Button
            className={`btn btn__sidebar--link${activeClass("/dashboard")}`}
            type="link"
            href="/dashboard"
          >
            <GridSVG
              stroke={activeClass("/dashboard") ? "#6379f4" : "#3A3D42"}
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Dashboard
          </Button>
        </li>
        <li className="home__link--aside--list">
          <Button
            className={`btn btn__sidebar--link${activeClass("/transfer")}`}
            type="link"
            href="/transfer"
          >
            <ArrowUpSVG
              stroke={activeClass("/transfer") ? "#6379f4" : "#3A3D42"}
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            Transfer
          </Button>
        </li>
        <li className="home__link--aside--list">
          <Button
            className="btn btn__sidebar--link"
            // onClick={toggleActive}
          >
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
            className={`btn btn__sidebar--link${activeClass("/profile")}`}
            type="link"
            href="/profile"
          >
            <PersonSVG
              stroke={activeClass("/profile") ? "#6379f4" : "#3A3D42"}
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
