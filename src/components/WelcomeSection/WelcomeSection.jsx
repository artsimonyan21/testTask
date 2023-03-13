import "./welcome_section.css";
import Utils from "../../utils";

const WelcomeSection = () => {
  const data = Utils.getSectionData("section_1");

  return (
    <section className="welcome_section_wrapper">
      <div className="welcome_section_description_wrapper">
        <h1>
          <span> {data.title}</span>
        </h1>
        <p>{data.description}</p>
        <button>{data.button_title}</button>
        <div className="welcome_section_svg_wrapper">
          <p>{data.trusted_by}</p>
          <div className="welcome_section_svg_content">
            <img
              style={{ width: "120px" }}
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg"
              alt=""
            />
            <img
              style={{ width: "80px" }}
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="welcome_section_img_wrapper">
        <img src={data.img_src} alt="" />
      </div>
    </section>
  );
};

export default WelcomeSection;
