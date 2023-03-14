import "./good_companies.css";

import Utils from "../../utils";

const GoodCompanies = () => {
  const data = Utils.getSectionData("good_companies");

  return (
    <section className="good_companies_section">
      <div className="good_companies_img_mobile">
        <img src={data.img} alt="" />
      </div>
      <div className="good_companies_description">
        <p>{data.enterprise_suite}</p>
        <h1 className="good_companies_section_title">
          <span>{data.title_1}</span>
          <br />
          <span className="companies_titles">{data.title_2}</span>
          <br />
          <span className="companies_titles">{data.title_3}</span>
          <br />
        </h1>
        <span className="good_companies_subtitle">{data.subtitle}</span>
        <div className="good_company_descriptions_wrapper">
          <div>
            <img src={data.first_description_img} alt="" />
            <div>{data.first_description}</div>
          </div>
          <div>
            <img src={data.second_description_img} alt="" />
            <div>{data.second_description}</div>
          </div>
          <div>
            <img src={data.last_description_img} alt="" />
            <div>{data.last_description}</div>
          </div>
          <a href="#" className="good_companies_href">
            {data.button_title}
          </a>
        </div>
      </div>
      <div className="good_companies_img">
        <img src={data.img} alt="" />
      </div>
    </section>
  );
};

export default GoodCompanies;
