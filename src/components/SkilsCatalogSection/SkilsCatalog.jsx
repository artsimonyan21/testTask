import "./skils_catalog.css";

import Utils from "../../utils";

const SkilsCatalog = () => {
  const data = Utils.getSectionData("skils_catalog");

  return (
    <section className="skils_catalog_section">
      <div className="skils_catalog_wrapper">
        <h3>{data.top_skills}</h3>
        <h3>{data.trnding_skills}</h3>
        <h3>{data.top_skills_in_us}</h3>
        <h3>{data.project_catalog}</h3>
      </div>
      <div className="skils_colum_1">
        <ul className="ul_catalog">
          {data.colum_1.map((el, index) => {
            return (
              <li key={index}>
                <a href="#">{el}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="skils_colum_2">
        <ul className="ul_catalog">
          {data.colum_2.map((el, index) => {
            return (
              <li key={index}>
                <a href="#">{el}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SkilsCatalog;
