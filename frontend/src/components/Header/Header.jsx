import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logout from "../../pages/Logout";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";
import { useAuth } from "../../context/AuthProvider";

const Header = () => {
  const [authUser] = useAuth();
  const [active, setActive] = useState("Home");
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth <= 768;

  return (
    <nav className="header bg-transparent border-b border-gray-200 container  mx-auto px-8 ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <RouterLink
          className="logo-link"
          to="/"
          onClick={() => setActive("Home")}
        >
          <img src={Logo} alt="SheManages" className="logo" />
        </RouterLink>

        {mobile ? (
          <button
            className="menu-icon"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpened}
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <img src={Bars} alt="Menu" />
          </button>
        ) : (
          <ul className="header-menu">
            <li>
              <RouterLink to="/" onClick={() => setActive("Home")}>
                Home
                {active === "Home" && <hr className="active-underline" />}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/ideas" onClick={() => setActive("Idea")}>
                Ideas
                {active === "Ideas" && <hr className="active-underline"></hr>}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products" onClick={() => setActive("Products")}>
                Posts
                {active === "Products" ? (
                  <hr className="active-underline"></hr>
                ) : (
                  ""
                )}
              </RouterLink>
            </li>
            {authUser && (
              <>
                <RouterLink
                  to="/addproduct"
                  onClick={() => setActive("Add Item")}
                >
                  Add Item
                  {active === "Add Item" && <hr className="active-underline" />}
                </RouterLink>
                <RouterLink
                  to="/addtrainer"
                  onClick={() => setActive("Add trainer")}
                >
                  Add Trainer
                  {active === "Add trainer" ? (
                    <hr className=" active-underline"></hr>
                  ) : (
                    ""
                  )}
                </RouterLink>
                <RouterLink
                  to={`products/myproduct/${authUser._id}`}
                  onClick={() => setActive("My Profile")}
                >
                  My Profile
                  {active === "My Profile" && (
                    <hr className="active-underline" />
                  )}
                </RouterLink>
                <Logout />
              </>
            )}
            {!authUser && (
              <RouterLink to="/login">
                <button className="login-button px-4 py-1 bg-slate-950 hover:bg-white hover:text-slate-950 duration-500">
                  Login
                </button>
              </RouterLink>
            )}
          </ul>
        )}
      </div>

      {mobile && menuOpened && (
        <div className="mobile-menu">
          <RouterLink
            to="/"
            onClick={() => {
              setActive("Home");
              setMenuOpened(false);
            }}
          >
            Home
            {active === "Home" && <hr className="active-underline" />}
          </RouterLink>
          <ScrollLink
            to="programs"
            smooth={true}
            onClick={() => {
              setActive("Programs");
              setMenuOpened(false);
            }}
          >
            Programs
            {active === "Programs" && <hr className="active-underline" />}
          </ScrollLink>
          <ScrollLink
            to="reasons"
            smooth={true}
            onClick={() => {
              setActive("Why us");
              setMenuOpened(false);
            }}
          >
            Why us
            {active === "Why us" && <hr className="active-underline" />}
          </ScrollLink>
          <ScrollLink
            to="plans"
            smooth={true}
            onClick={() => {
              setActive("Plans");
              setMenuOpened(false);
            }}
          >
            Plans
            {active === "Plans" && <hr className="active-underline" />}
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            smooth={true}
            onClick={() => {
              setActive("Testimonials");
              setMenuOpened(false);
            }}
          >
            Testimonials
            {active === "Testimonials" && <hr className="active-underline" />}
          </ScrollLink>
          {authUser && (
            <>
              <RouterLink
                to="/addproduct"
                onClick={() => {
                  setActive("Add Item");
                  setMenuOpened(false);
                }}
              >
                Add Item
                {active === "Add Item" && <hr className="active-underline" />}
              </RouterLink>
              <RouterLink
                to={`products/myproduct/${authUser._id}`}
                onClick={() => {
                  setActive("My Profile");
                  setMenuOpened(false);
                }}
              >
                My Profile
                {active === "My Profile" && <hr className="active-underline" />}
              </RouterLink>
              <Logout />
            </>
          )}
          {!authUser && (
            <RouterLink to="/login">
              <button className="login-button">Login</button>
            </RouterLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
