import Header from "./Header";
import "./base_layout.css";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='base_layout_wrapper'>
        <div>{children}</div>
      </div>
    </>
  );
};

export default BaseLayout;
