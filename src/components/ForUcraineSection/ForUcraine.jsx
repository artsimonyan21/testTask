import "./for_ucraine.css";

import { ReactComponent as HelpUcrainIcon } from "../../assets/ukraine-help.svg";

import Utils from "../../utils";

const ForUcraine = () => {
  const data = Utils.getSectionData("for_ucraine");
  return (
    <section className="for_ucraine_section">
      <div className="for_ucraine_desc_wrapper">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <a href="#">{data.butt_title}</a>
      </div>
      <div className="for_ucraine_img_wrapper">
        <HelpUcrainIcon />
      </div>
    </section>
  );
};

export default ForUcraine;
