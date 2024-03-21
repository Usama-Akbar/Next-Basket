import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  const [mobilenav, setMobileNav] = React.useState<Boolean>(false);
  return (
    <div>
      <div className="header-main">
        <div className="d-flex">
          <div>
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              src={"/assets/phone.png"}
            />
            <span className="header-txt ms-2">(225) 555-0118</span>
          </div>
          <div className="ms-4">
            <Image
              height="12"
              width="16"
              alt="phone"
              unoptimized
              src={"/assets/mail.png"}
            />
            <span className="header-txt ms-2">michelle.rivera@example.com</span>
          </div>
        </div>

        <span className="header-txt">
          Follow Us and get a chance to win 80% off
        </span>
        <div className="d-flex align-items-center">
          <span className="header-txt"> Follow Us : </span>
          <div>
            <Image
              height="16"
              width="16"
              alt="phone"
              className="ms-3"
              unoptimized
              src={"/assets/instagram.png"}
            />
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              className="ms-3"
              src={"/assets/youtube.png"}
            />
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              className="ms-3"
              src={"/assets/facebook.png"}
            />
            <Image
              height="16"
              width="16"
              alt="phone"
              className="ms-3"
              unoptimized
              src={"/assets/twitter.png"}
            />
          </div>
        </div>
      </div>
      <div className="header-secondary">
        <div className="d-flex align-items-center">
          <span className="logo">Bandage</span>
          <div className="links-div">
            <span className="link">Home</span>
            <span className="link">Shop</span>
            <span className="link">About</span>
            <span className="link">Blog</span>
            <span className="link">Contact</span>
            <span className="link">Pages</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Image
            height="16"
            width="16"
            alt="phone"
            unoptimized
            src={"/assets/user.png"}
          />
          <span className="secondary-header-txt ms-2">Login / Register</span>

          <div className="d-flex align-items-center ms-4">
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              src={"/assets/search.png"}
            />
            <div className="ms-4">
              <Image
                height="16"
                width="16"
                alt="phone"
                unoptimized
                src={"/assets/cart.png"}
              />
              <span className="secondary-header-txt ms-1">1</span>
            </div>
            <div className="ms-4">
              <Image
                height="16"
                width="16"
                alt="phone"
                unoptimized
                src={"/assets/heart.png"}
              />
              <span className="secondary-header-txt ms-1">1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-nav">
          <div className="d-flex align-items-center">
            <span className="logo">Bandage</span>
          </div>
          <div>
            <Image
              height="24"
              width="24"
              alt="search"
              unoptimized
              src={"/assets/search-mobile.png"}
            />
            <Image
              height="24"
              width="24"
              style={{ marginLeft: "24px" }}
              alt="cart"
              unoptimized
              src={"/assets/cart-mobile.png"}
            />
            <Image
              height="13"
              width="24"
              style={{ marginLeft: "24px" }}
              alt="menu"
              unoptimized
              onClick={() => setMobileNav(!mobilenav)}
              src={"/assets/menu-mobile.png"}
            />
          </div>
        </div>
        {mobilenav ? (
          <div className="nav-links-mobile-div">
            <span className="nav-link-mobile">Home</span>
            <span className="nav-link-mobile">Product</span>
            <span className="nav-link-mobile">Pricing</span>
            <span className="nav-link-mobile">Contact</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
