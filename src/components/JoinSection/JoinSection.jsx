import "./join_section.css";

import Utils from "../../utils";

import { ReactComponent as Notes } from "../../assets/notes.svg";
import { ReactComponent as Strick } from "../../assets/strick.svg";
import { ReactComponent as TheBest } from "../../assets/the_best.svg";

const JoinSection = () => {
  const data = Utils.getSectionData("join_section");

  return (
    <section className="join_section_wrapper">
      <div className="join_section_img_wrapper">
        alsfcaskncsnac ascnskalcnsklcn
      </div>
      <div className="join_section_description_wrapper">
        <h2>{data.title}</h2>
        <div className="join_section_subsections">
          <div className="join_section_svg">
            <Notes />
          </div>
          <div>
            <h5 className="join_section_subtitle">{data.first}</h5>
            <p className="join_section_description">{data.first_description}</p>
          </div>
        </div>
        <div className="join_section_subsections">
          <div className="join_section_svg">
            <Strick />
          </div>
          <div>
            <h5 className="join_section_subtitle">{data.second}</h5>
            <p className="join_section_description">
              {data.second_description}
            </p>
          </div>
        </div>
        <div className="join_section_subsections">
          <div className="join_section_svg">
            <TheBest />
          </div>
          <div>
            <h5 className="join_section_subtitle">{data.last}</h5>
            <p className="join_section_description">{data.last_description}</p>
          </div>
        </div>
        <div className="join_section_href_wrapper">
          <a href="#">{data.first_button_title}</a>
          <a href="#">{data.second_button_title}</a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
