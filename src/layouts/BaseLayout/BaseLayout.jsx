import Header from "./Header";
import "./base_layout.css";
import Footer from "./Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="base_layout_wrapper">
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
