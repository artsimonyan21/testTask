import "./for_client_button.css";

import { ReactComponent as Arrow } from "../../../../assets/arrow.svg";

const ForClientButton = ({
  button_title_1,
  button_title_2,
  button_description,
}) => {
  return (
    <button className="for_client_button">
      <p className="for_client_button_title">
        {button_title_1}
        {button_title_2}
      </p>
      <p className="for_client_butt_desc">
        {button_description} <sup>TM</sup> <Arrow />
      </p>
    </button>
  );
};

export default ForClientButton;
