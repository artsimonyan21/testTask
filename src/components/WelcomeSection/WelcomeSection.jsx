import './welcome_section.css';
import Utils from '../../utils';

const WelcomeSection = () => {
  const data = Utils.getSectionData('section_1');
  console.log(data);

  return (
    <section className="welcome_section_wrapper">
      <div className="welcome_section_description_wrapper">
        <h1>
          <span> {data.title}</span>
        </h1>
        <p>{data.description}</p>
        <button>{data.button_title}</button>
      </div>
      <div className="welcome_section_img_wrapper">
        <img src={data.img_src} />
      </div>
    </section>
  );
};

export default WelcomeSection;
