import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import Footer from "../Footer/Footer";
import Login from "../Login/LoginPopup";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { showLogin, setShowLogin, getTotalCartAmount }: any =
    useContext(StoreContext);
  return (
    <div>
      {showLogin && <Login />}
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
            }}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu");
            }}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact-us");
            }}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} />
            </Link>
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
