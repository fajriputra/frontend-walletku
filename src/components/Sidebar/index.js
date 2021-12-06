import React from "react";
import { useRouter } from "next/router";
import axios from "helpers/axios";
import cookie from "js-cookie";

import Button from "components/Button";
import {
  ArrowUpSVG,
  GridSVG,
  LogoutSVG,
  PersonSVG,
  PlusSVG,
} from "components/SVG";

export default function Sidebar({ handleShow, className }) {
  const router = useRouter();

  const activeClass = (path) => {
    return router.pathname === path ? " active" : "";
  };

  const handleLogout = () => {
    axios.post("/auth/logout").then(() => {
      cookie.remove("id");
      cookie.remove("token");

      window.location.href = "/";
    });
  };

  return (
    <aside className={["home__link d-md-block", className].join(" ")}>
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
            <span className="d-none d-md-inline">Dashboard</span>
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
            <span className="d-none d-md-inline">Transfer</span>
          </Button>
        </li>
        <li className="home__link--aside--list">
          <Button className="btn btn__sidebar--link" onClick={handleShow}>
            <PlusSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            <span className="d-none d-md-inline">Top Up</span>
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
            <span className="d-none d-md-inline">Profile</span>
          </Button>
        </li>
        <li className="home__link--aside--list logout">
          <Button className="btn btn__sidebar--link" onClick={handleLogout}>
            <LogoutSVG
              stroke="#3A3D42"
              width="28"
              height="28"
              className="home__link--aside--list--svg"
            />
            <span className="d-none d-md-inline">Logout</span>
          </Button>
        </li>
      </ul>
    </aside>
  );
}
