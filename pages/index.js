import { landingStyles } from "../styles";
import FAQAccordion from "../components/FAQ";
const Main = () => {
  return (
    <>
      <div className={landingStyles.main}>
        <div className={landingStyles.text}>
          <img
            className={landingStyles.mainLogo}
            src="/images/nivelesfitBlack.png"
            alt="Gewi Logo"
          />
          <h1>Progreso por niveles para todos!</h1>
          <button>Comienza ahora!</button>
        </div>
        <img
          className={landingStyles.heroImage}
          src="/images/cover1.JPG
          "
          alt="Gewi Logo"
        />
      </div>

      <div className={landingStyles.mainSkills}>
        <div className={landingStyles.skillText}>
          <h1>Diferente nivel. Diferente progresion.</h1>
        </div>
        <div className={landingStyles.skills}>
          <div className={landingStyles.skill}>
            <img
              className={landingStyles.skillImage}
              src="/images/skill1.jpg
          "
              alt="Blanco"
            />
          </div>
          <div className={landingStyles.skill}>
            <img
              className={landingStyles.skillImage}
              src="/images/skill2.JPG
          "
              alt="Verde"
            />
          </div>
          <div className={landingStyles.skill}>
            <img
              className={landingStyles.skillImage}
              src="/images/skill3.JPG
          "
              alt="Amarillo"
            />
          </div>
          <div className={landingStyles.skill}>
            <img
              className={landingStyles.skillImage}
              src="/images/skill4.JPG
          "
              alt="Azul"
            />
          </div>
          <div className={landingStyles.skill}>
            <img
              className={landingStyles.skillImage}
              src="/images/skill5.JPG
          "
              alt="Rojo"
            />
          </div>
        </div>
        <div className={landingStyles.skillText}>
          <h1>Blanco, Verde, Amarillo, Azul, Rojo</h1>
        </div>
      </div>

      <div className={landingStyles.mainProducts}>
        <h1>Nuestros productos</h1>
        <div className={landingStyles.products}>
          <div className={landingStyles.product}>
            <img
              className={landingStyles.productImage}
              src="/images/skill5.JPG"
              alt="Rojo"
            />
            <div className={landingStyles.productText}>
              <h3>Producto 1</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
          </div>
          <div className={landingStyles.product}>
            <img
              className={landingStyles.productImage}
              src="/images/skill1.JPG"
              alt="Rojo"
            />
            <div className={landingStyles.productText}>
              <h3>Producto 2</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={landingStyles.mainDemo}>
        <h1>Nuestra Herramienta</h1>
      </div>

      <div className={landingStyles.mainTestimonio}>
        <h1>Testimonios</h1>
        <div className={landingStyles.testimonios}>
          <div className={landingStyles.testimonio}>
            <img
              className={landingStyles.productImage}
              src="/images/skill5.JPG"
              alt="Rojo"
            />
            <h3>Producto 1</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
          <div className={landingStyles.testimonio}>
            <img
              className={landingStyles.productImage}
              src="/images/skill1.JPG"
              alt="Rojo"
            />
            <h3>Producto 2</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
          <div className={landingStyles.testimonio}>
            <img
              className={landingStyles.productImage}
              src="/images/skill1.JPG"
              alt="Rojo"
            />
            <h3>Producto 2</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
          <div className={landingStyles.testimonio}>
            <img
              className={landingStyles.productImage}
              src="/images/skill1.JPG"
              alt="Rojo"
            />
            <h3>Producto 2</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
      <div className={landingStyles.mainCoach}>
        <h1>Coach</h1>
        <div>
          <img
            className={landingStyles.productImage}
            src="/images/skill1.JPG"
            alt="Rojo"
          />
          <p>
            Nuestros programas de entrenamiento BPM incluyen rutinas diarias en
            formato PDF para progresar en tu forma física. Estos programas están
            diseñados para ayudarte a alcanzar tus metas de forma estructurada y
            eficiente, independientemente de tu nivel actual.{" "}
          </p>
        </div>
      </div>

      <div className={landingStyles.main}>
        <h1>FAQ</h1>
        <FAQAccordion />
      </div>
    </>
  );
};

export default Main;
