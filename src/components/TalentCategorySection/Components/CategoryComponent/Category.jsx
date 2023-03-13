import "./category.css";

const Category = ({ title, rating, skill_count }) => {
  return (
    <div className="categoryes_container">
      <div className="one_category_wrapper">
        <div className="category_pill_title">{title}</div>
        <div className="category_skills_wrapper">
          <img src="" alt="" />
          <div className="category_rating_wrapper">
            <p>{rating}/5</p>
            <p>{skill_count} skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
