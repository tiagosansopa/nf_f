import { useState, useEffect } from "react";
import Link from "next/link";
import { navStyles } from "../styles";
const Nav = () => {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const [cart, setCart] = useState(false);
  const [prof, setProf] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  const handleCart = () => setCart(!cart);
  const handleProf = () => setProf(!prof);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 720) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      className={
        navbar
          ? `${navStyles.navbar} ${navStyles.active}`
          : `${navStyles.navbar}`
      }
    >
      <Link
        href="/"
        className={`${navStyles["navbar-logo"]} ${navStyles["logo-left"]}`}
        onClick={closeMobileMenu}
      >
        <img
          className={
            navbar ? `${navStyles.active}` : `${navStyles["menu-icon"]}`
          }
          src="/images/nivelesfitBlack.png"
          alt="NF Logo"
          height="60"
          loading="lazy"
        />
      </Link>

      <Link
        href="/"
        className={`${navStyles["navbar-logo"]} ${navStyles["logo-center"]}`}
        onClick={closeMobileMenu}
      >
        <img
          src="/images/nivelesfitBlack.png"
          alt="NF Logo"
          height="60"
          loading="lazy"
        />
      </Link>
      <div className={navStyles["menu-icon"]} onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul
        className={
          click
            ? `${navStyles["nav-menu"]} ${navStyles.active}`
            : `${navStyles["nav-menu"]}`
        }
      >
        <li className={navStyles["nav-item"]}>
          <Link
            href="/"
            className={navStyles["nav-links"]}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>

        <li className={navStyles["nav-item"]}>
          <Link
            href="/"
            className={navStyles["nav-links"]}
            onClick={closeMobileMenu}
          >
            Products
          </Link>
        </li>

        <li className={navStyles["nav-item"]}>
          <Link
            href="/"
            className={navStyles["nav-links"]}
            onClick={closeMobileMenu}
          >
            Cursos
          </Link>
        </li>

        <li className={navStyles["nav-item"]}>
          <Link
            href="/"
            className={navStyles["nav-links"]}
            onClick={closeMobileMenu}
          >
            Testimony
          </Link>
        </li>

        <li className={navStyles["nav-item"]}>
          <Link
            href="/"
            className={navStyles["nav-links"]}
            onClick={closeMobileMenu}
          >
            Coach
          </Link>
        </li>
        <li className={navStyles["nav-item"]}>
          <Link
            href="/"
            className={navStyles["nav-links"]}
            onClick={closeMobileMenu}
          >
            FAQ
          </Link>
        </li>
        <li className={navStyles["nav-item"]}>
          <button>Entrar</button>
        </li>
      </ul>
      {/* <ul className="nav-cart">
        <li className="nav-item">
          <Link href="/" className={navStyles["nav-links"]} onClick={handleCart}>
            <i className="fa fa-shopping-cart fa-bars " aria-hidden="true"></i>
          </Link>
        </li>

        <li className="nav-item">
          <div className={navStyles["nav-links"]} onClick={handleProf}>
            <img
              src={profile}
              className="rounded-circle"
              height="50"
              alt="profile"
              loading="lazy"
            />
          </div>
        </li>
      </ul> */}
      {/* <div>
        <ul className={cart ? "cart-menu active" : "cart-menu"}>
          <li className="cart-item">No tienes nada agregado.</li>
        </ul>
        <ul className={prof ? "profile-menu active" : "profile-menu"}>
          <li className="profile-item">
            <Link
              href="/admin"
              className={navStyles["nav-links"]}
              onClick={handleProf}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Nav;
