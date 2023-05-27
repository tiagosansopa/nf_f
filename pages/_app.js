import Template from "../components/Template";
import "../styles/globals.css";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
