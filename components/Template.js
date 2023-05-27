import Nav from "./Navbar";
import Footer from "./Footer";
const Template = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
