import "./join_section.css";

import Utils from "../../utils";

const JoinSection = () => {
  const data = Utils.getSectionData("join_section");

  return (
    <section className='join_section_wrapper'>
      <div className='join_section_img_wrapper'>
        alsfcaskncsnac ascnskalcnsklcn
      </div>
      <div className='join_section_description_wrapper'>
        <h2>{data.title}</h2>
        <div className='join_section_subsections'>
          <div className='join_section_svg'>{data.first_svg} saf</div>
          <div>
            <h5 className='join_section_subtitle'>{data.first}</h5>
            <p className='join_section_description'>{data.first_description}</p>
          </div>
        </div>
        <div className='join_section_subsections'>
          <div className='join_section_svg'>{data.second_svg}scs</div>
          <div>
            <h5 className='join_section_subtitle'>{data.second}</h5>
            <p className='join_section_description'>
              {data.second_description}
            </p>
          </div>
        </div>
        <div className='join_section_subsections'>
          <div className='join_section_svg'>{data.last_svg}scw</div>
          <div>
            <h5 className='join_section_subtitle'>{data.last}</h5>
            <p className='join_section_description'>{data.last_description}</p>
          </div>
        </div>
        <div className='join_section_href_wrapper'>
          <a href='#'>{data.first_button_title}</a>
          <a href='#'>{data.second_button_title}</a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
