import Utils from "../../utils";
import Category from "./Components/CategoryComponent/Category";
import "./talent_category.css";

const TalentCategory = () => {
  const data = Utils.getSectionData("category_section");

  return (
    <section className='talent_category_section'>
      <h1>{data.title}</h1>
      <div className='talent_category_subtitle'>{data.sub_title}</div>
      <div className='talent_categories'>
        {data.categories.map((item, index) => {
          return <Category {...item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default TalentCategory;
