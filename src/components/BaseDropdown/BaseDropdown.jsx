import "./base_dropdown.css";

import { ReactComponent as Pointer } from "../../assets/pointer.svg";

const BaseDropdown = ({ title, children }) => {
  return (
    <div className="dropdown_container">
      <p className="base_dropdown_title">
        {title} <Pointer className="header_pointer_svg" />
      </p>
      <div className="dropdown_children">
        <div className="content_wrapper">{children}</div>
      </div>
    </div>
  );
};

export default BaseDropdown;
