import "./find_work.css";

import Utils from "../../utils";

const FindWork = () => {
  const data = Utils.getSectionData("find_work");
  return (
    <section className="find_work_section">
      <div className="find_work_img_wrapper">
        <img src={data.img_src} alt="" />
      </div>
      <div className="find_work_desription_wrapper">
        <div className="find_work_title">
          <p>{data.for_talent}</p>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="find_work_line">
          <hr className="solid" />
        </div>
        <div className="find_work_bott_desciptions">
          <div>{data.bottom_desc_1}</div>
          <div>{data.bottom_desc_2}</div>
          <div>{data.bottom_desc_3}</div>
          <a href="#" className="find_work_href">
            {data.button_title}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindWork;
