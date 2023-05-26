import { landingStyles } from "../styles";
const Main = () => {
  return (
    <div className={landingStyles.main}>
      <img
        className={landingStyles.mainLogo}
        src="/images/nivelesfitWhite.png"
        alt="Gewi Logo"
      />
      <h1>
        Entrenamiento por niveles para desbloquear el potencial del cuerpo
        humano
      </h1>
    </div>
  );
};

export default Main;
