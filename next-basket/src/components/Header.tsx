import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeToCart, emptyCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeToWishlist,
  emptyWishlist,
} from "@/features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
const Header: React.FC = () => {
  const [cartmodalShow, setcartmodalShow] = React.useState(false);
  const [wishlistmodalShow, setwishlistmodalShow] = React.useState(false);
  const router = useRouter();
  const [mobilenav, setMobileNav] = React.useState<Boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products);
  const wishlist = useSelector((state: RootState) => state.wishlist.products);
  console.log(wishlist);
  return (
    <div>
      <Modal
        show={wishlistmodalShow}
        size="lg"
        onHide={() => setwishlistmodalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "20px" }}>
          <div className="cart-heading-div">
            <span className="shopping-cart-heading">Shopping Wishlist</span>
            <span
              onClick={() => dispatch(emptyWishlist())}
              className="remove-all-heading"
            >
              Remove all
            </span>
          </div>
          {wishlist.length > 0 ? (
            wishlist.map((data: any, index) => (
              <div key={index} className="cart-main-div">
                <Image
                  height="100"
                  width="100"
                  alt="phone"
                  className="ms-3"
                  unoptimized
                  src={data.thumbnail}
                />
                <div className="cart-product-details">
                  <span className="product-title">{data.title}</span>
                  <span className="product-brand">{data.category}</span>
                  <span className="product-category">{data.brand}</span>
                </div>
                <div className="cart-actions-div">
                  <span className="product-title">${data.price}</span>
                  <span
                    onClick={() => dispatch(removeToWishlist(data.id))}
                    className="product-remove-txt"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "10%", textAlign: "center" }}>
              Wishlist is Empty
            </div>
          )}
        </Modal.Body>
      </Modal>
      <Modal
        show={cartmodalShow}
        size="lg"
        onHide={() => setcartmodalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "20px" }}>
          <div className="cart-heading-div">
            <span className="shopping-cart-heading">Shopping Cart</span>
            <span
              onClick={() => dispatch(emptyCart())}
              className="remove-all-heading"
            >
              Remove all
            </span>
          </div>
          {cart.length > 0 ? (
            cart.map((data: any, index) => (
              <div key={index} className="cart-main-div">
                <Image
                  height="100"
                  width="100"
                  alt="phone"
                  className="ms-3"
                  unoptimized
                  src={data.thumbnail}
                />
                <div className="cart-product-details">
                  <span className="product-title">{data.title}</span>
                  <span className="product-brand">{data.category}</span>
                  <span className="product-category">{data.brand}</span>
                </div>
                <div className="cart-actions-div">
                  <span className="product-title">${data.price}</span>
                  <span
                    onClick={() => dispatch(addToWishlist(data))}
                    className="product-save-txt"
                  >
                    save for later
                  </span>
                  <span
                    onClick={() => dispatch(removeToCart(data.id))}
                    className="product-remove-txt"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "10%", textAlign: "center" }}>
              Cart is Empty
            </div>
          )}
        </Modal.Body>
      </Modal>
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
          <span onClick={() => router.push("/")} className="logo">
            Bandage
          </span>
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
            <div onClick={() => setcartmodalShow(true)} className="ms-4">
              <Image
                height="16"
                width="16"
                alt="phone"
                style={{ cursor: "pointer" }}
                unoptimized
                src={"/assets/cart.png"}
              />
              <span className="secondary-header-txt ms-1">{cart.length}</span>
            </div>
            <div onClick={() => setwishlistmodalShow(true)} className="ms-4">
              <Image
                height="16"
                width="16"
                style={{ cursor: "pointer" }}
                alt="phone"
                unoptimized
                src={"/assets/heart.png"}
              />
              <span className="secondary-header-txt ms-1">
                {wishlist.length}
              </span>
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
