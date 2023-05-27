import { footStyles } from "../styles";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={footStyles["footer-container"]}>
      <div className={footStyles["footer-links"]}>
        {/* <div className={footStyles["footer-logo"]}>
          <img
            src="/images/nivelesfitWhite.png"
            alt="NF Logo"
            height="60"
            loading="lazy"
          />
        </div> */}

        <div className={footStyles["footer-link-wrapper"]}>
          <img
            src="/images/nivelesfitWhite.png"
            alt="NF Logo"
            height="60"
            loading="lazy"
          />
          <img
            src="/images/logoTian.png"
            alt="NF Logo"
            height="40"
            loading="lazy"
          />
          <img
            src="/images/logoBPM.png"
            alt="NF Logo"
            height="40"
            loading="lazy"
          />
          {/* <div className={footStyles["footer-link-items"]}>
            <Link href="/about">Sobre Nosotros</Link>
          </div>
          <div className={footStyles["footer-link-items"]}>
            <Link href="/">¿Quién es tu Coach?</Link>
          </div>
          <div className={footStyles["footer-link-items"]}>
            <Link href="/plans">Entrenamiento</Link>
          </div>
          <div className={footStyles["footer-link-items"]}>
            <Link href="/community">Comunidad y Eventos</Link>
          </div>
          <div className={footStyles["footer-link-items"]}>
            <Link href="/sign-up">Agenda tu Entrevista</Link>
          </div> */}
        </div>

        {/* <div className={footStyles["social-icons"]}>
          <Link
            className={footStyles["social-icon-link"]}
            href="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className={`${footStyles.fab} ${footStyles["fa-facebook-f"]}`} />
          </Link>
          <Link
            className={footStyles["social-icon-link"]}
            href="https://instagram.com/uphill.coaching/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className={`${footStyles.fab} ${footStyles["fa-instagram"]}`} />
          </Link>
          <Link
            className={footStyles["social-icon-link"]}
            href="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className={`${footStyles.fab} ${footStyles["fa-youtube"]}`} />
          </Link>
        </div> */}
      </div>

      <div className={footStyles["social-media-wrap"]}>
        <small className={footStyles["website-rights"]}>
          Tian Bianchi © 2023
        </small>
      </div>
    </div>
  );
};

export default Footer;
