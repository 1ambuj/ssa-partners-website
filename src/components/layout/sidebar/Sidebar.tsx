import React from "react";
import Logo from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Sidebar = ({ sidebarToggle, closeSidebar }: any) => {
  return (
    <>
      <div
        className={
          (sidebarToggle ? " form-overlay-active" : " ") + " form-overlay"
        }
        onClick={closeSidebar}
      ></div>

      <div
        className={(sidebarToggle ? " active" : " ") + " sidebar-menu"}
        id="sidebar-menu"
      >
        <button className="sidebar-menu-close" onClick={closeSidebar}>
          <i className="fa fa-times"></i>
        </button>
        <div className="sidebar-inner">
          <div className="thumb">
            <Image src={Logo} alt="logo" priority />
          </div>
          <p>
            We appreciate your trust greatly! minim veniam, consectetur
            adipiscing elit,
          </p>
          <p>
            We understand better that enim ad minim veniam, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="sidebar-address">
            <h4 className="mb-3">Contact Us</h4>
            <ul>
              <li>
                <i className="fa fa-map-marker-alt"></i>Lavaca Street, Suite
                2000
              </li>
              <li>
                <i className="fa fa-envelope"></i>trustemail@.com
              </li>
              <li>
                <i className="fa fa-phone"></i>(+880) 01235 70051
              </li>
            </ul>
          </div>
          <div className="sidebar-subscribe">
            <input type="text" placeholder="Email" />
            <button>
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
          <ul className="social-media">
            <li>
              <Link href="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="fab fa-pinterest"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
