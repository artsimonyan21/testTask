import "./about_upwork.css";
import Utils from "../../utils";

import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as CheckMark } from "../../assets/check_mark.svg";
import { ReactComponent as Dollar } from "../../assets/dollar.svg";
import { ReactComponent as StarAround } from "../../assets/star_around.svg";

const AboutUpwork = () => {
  const data = Utils.getSectionData("about_upwork");

  return (
    <section className="about_upwork_section">
      <div className="about_upwork_description_wrapper">
        <div className="about_upwork_description_content">
          <div>
            <h2 className="about_upwork_title">{data.title}</h2>
          </div>
          <div className="about_upwork_description">
            <StarAround className="about_upwork_svges" />
            <div>
              <h3>{data.subtitle_1}</h3>
              <p>{data.subtitle_1_description}</p>
            </div>
          </div>
          <div className="about_upwork_description">
            <Dollar className="about_upwork_svges" />
            <div>
              <h3>{data.subtitle_2}</h3>
              <p>{data.subtitle_2_description}</p>
            </div>
          </div>
          <div className="about_upwork_description">
            <CheckMark className="about_upwork_svges" />
            <div>
              <h3>{data.subtitle_3}</h3>
              <p>{data.subtitle_3_description}</p>
            </div>
          </div>
        </div>
        <div className="about_upwork_img_wrapper">
          <img src={data.img_src} alt="" className="about_upwork_img" />
        </div>
      </div>
      <div className="about_upwork_rating_wrapper">
        <div className="about_upwork_rating_content">
          <h3>
            <span>{data.right_title_1}</span>
            <br />
            <span>{data.right_title_2}</span>
            <br />
            <span>{data.right_title_3}</span>
          </h3>
          <div className="about_upwork_right_description">
            <Star className="about_upwork_right_svg" />
            <div>
              <h3>{data.right_subtitle_1}</h3>
              <p>{data.right_description_1}</p>
            </div>
          </div>
          <div className="about_upwork_right_description">
            <img
              src={data.right_img}
              alt=""
              className="about_upwork_right_svg"
            />
            <div>
              <h3>{data.right_subtitle_2}</h3>
              <p>{data.right_description_2}</p>
            </div>
          </div>
        </div>
        <div className="mobile_image">
          <img src={data.img_src} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUpwork;
