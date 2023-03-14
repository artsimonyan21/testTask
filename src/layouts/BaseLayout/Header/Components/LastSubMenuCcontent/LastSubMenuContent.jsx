import "./last_sub_menu_content.css";

const LastSubMenuContent = () => {
  return (
    <div className="last_sub_menu_content">
      <div className="last_sub_menu_colum_1">
        <h5>
          Talent Scout <sup>TM</sup>
        </h5>
        <p>
          Learn how our recruiters find you expert developers, designers, and
          marketers.
        </p>
        <p>
          <a href="#">Talk to Talent Scout</a>
          {/* <Arrow /> */}
        </p>
      </div>
      <div className="last_sub_menu_colum_2">
        <ul>
          <li>
            <a href="#">Development & IT</a>
            <a href="#">Design & Creative</a>
            <a href="#">Marketing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LastSubMenuContent;
