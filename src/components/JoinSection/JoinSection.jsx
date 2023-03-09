import './join_section.css';

import Utils from '../../utils';

const JoinSection = () => {
  const data = Utils.getSectionData('join_section');

  return (
    <section className="join_section_wrapper">
      <div></div>
      <div>
        <h2>{data.title}</h2>
        <div>
          <div>{data.first_svg}</div>
          <div>
            <h5>{data.first}</h5>
            <p>{data.first_description}</p>
          </div>
        </div>
        <div>
          <div>{data.second_svg}</div>
          <div>
            <h5>{data.second}</h5>
            <p>{data.second_description}</p>
          </div>
        </div>
        <div>
          <div>{data.last_svg}</div>
          <div>
            <h5>{data.last}</h5>
            <p>{data.last_description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
