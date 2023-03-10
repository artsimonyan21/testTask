import "./category.css";

const Category = ({ title, rating, skill_count }) => {
  return (
    <div className='categoryes_container'>
      <div className='one_category_wrapper'>
        <div className='category_pill_title'>{title}</div>
        <div className='category_skills_wrapper'>
          <img src='' alt='' />
          <div className='category_rating_wrapper'>
            <span>{rating}/5</span>
            <span>{skill_count} skills</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
