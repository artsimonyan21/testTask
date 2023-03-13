import "./for_ucraine.css";

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
        <img src={data.img_src} alt="" />
      </div>
    </section>
  );
};

export default ForUcraine;
