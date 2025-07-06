import { Link } from "react-router-dom";
import "./Navbar.scss";
import { RiHome2Line } from "@remixicon/react";

export default function Navbar() {
  return (
    <div className="Nav">
      <div className="Nav__content-left">
        <Link>SHOP</Link>
      </div>
      <div className="Nav__main">
        <Link to={"/"}>
          <RiHome2Line />
        </Link>
      </div>
      <div className="Nav__content-right"></div>
    </div>
  );
}
