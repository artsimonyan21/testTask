import "./first_sub_menu_content.css";

// import { ReactComponent as Arrow } from "../../../../../assets/arrow.scg";

const FirstSubMenuContent = () => {
  return (
    <div className="first_sub_menu_content">
      <div className="first_sub_menu_colum_1">
        <h5>
          Talent Marketplace <sup>TM</sup>
        </h5>
        <p>
          Learn about working with talent or explore your specific hiring needs.
        </p>
        <p>
          <a href="#">Hire on Talent Marketplace</a>
          {/* <Arrow /> */}
        </p>
      </div>
      <div className="first_sub_menu_colum_2">
        <ul>
          <li>
            <a href="#">Hire on Talent Marketplace</a>
            <a href="#">Design & Creative</a>
            <a href="#">Sales & Marketing</a>
            <a href="#">Writing & Translation</a>
            <a href="#">Admin & Customer Support</a>
            <a href="#">HR & Training</a>
            <a href="#">Legal</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstSubMenuContent;
