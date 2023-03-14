import BaseDropdown from "../../../components/BaseDropdown/BaseDropdown";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import "./header.css";
import Utils from "../../../utils";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import FirstSubMenuContent from "./Components/FirstSuBMenuContent/FirstSubMenuContent";
import SecondSubMenuContent from "./Components/SecondSubMenuContent/SecondSubMenuContent";
import LastSubMenuContent from "./Components/LastSubMenuCcontent/LastSubMenuContent";

import { ReactComponent as Pointer } from "../../../assets/pointer.svg";

const Header = () => {
  const data = Utils.getSectionData("header_find_work_section");
  const [activeEl, setActiveElement] = useState(1);

  const handleMenuDetailsHover = (activateElement) => () => {
    setActiveElement(activateElement);
  };

  return (
    <div className="header_wrapper">
      <div className="first_container">
        <BurgerMenu />
        <Logo style={{ width: "82px" }} />
        <div className="navlink_wrapper">
          <BaseDropdown title="Find talent">
            <div className="first_submenu_wrapper">
              <div className="first_submenu_items">
                <div
                  className={`current_item ${
                    activeEl === 1 ? "current_item_active" : ""
                  }`}
                  onMouseOver={handleMenuDetailsHover(1)}
                >
                  <div>
                    <h5>Post a job and hire a pro</h5>
                    <p>Talent Marketplace</p>
                  </div>
                  <Pointer className="curent_item_pointer" />
                </div>
                <div
                  className={`current_item ${
                    activeEl === 2 ? "current_item_active" : ""
                  }`}
                  onMouseOver={handleMenuDetailsHover(2)}
                >
                  <div>
                    <h5>Browse and buy projects</h5>
                    <p>Project Catalog</p>
                  </div>
                  <Pointer className="curent_item_pointer" />
                </div>
                <div
                  className={`current_item ${
                    activeEl === 3 ? "current_item_active" : ""
                  }`}
                  onMouseOver={handleMenuDetailsHover(3)}
                >
                  <div>
                    <h5>Browse and buy projects</h5>
                    <p>Talent Scout</p>
                  </div>
                  <Pointer className="curent_item_pointer" />
                </div>
              </div>
              <div className="submenu_conent_wrapper">
                {activeEl === 1 ? (
                  <div>
                    <FirstSubMenuContent />
                  </div>
                ) : activeEl === 2 ? (
                  <div>
                    <SecondSubMenuContent />
                  </div>
                ) : (
                  <div>
                    <LastSubMenuContent />
                  </div>
                )}
              </div>
            </div>
          </BaseDropdown>
          <BaseDropdown title="Find work">
            <div className="header_find_work">
              <div>
                <h4>{data.title_1}</h4>
                <p>{data.description_1}</p>
              </div>
              <div>
                <h4>{data.title_2}</h4>
                <p>{data.description_2}</p>
              </div>
              <div>
                <h4>{data.title_3}</h4>
                <p>{data.description_3}</p>
              </div>
            </div>
          </BaseDropdown>
          <BaseDropdown title="Why uowork">
            <div className="why_upwork_section">
              <div className="why_upwork_first_secon_colum">
                <div>
                  <h4>Success stories</h4>
                  <p>
                    Discover how teams work strategically and grow together.
                  </p>
                </div>
                <div>
                  <h4>How to hire</h4>
                  <p>Learn about the different ways to get work done.</p>
                </div>
              </div>
              <div className="why_upwork_first_secon_colum">
                <div>
                  <h4>Revievs</h4>
                  <p>See what it’s like to collaborate on Upwork.</p>
                </div>
                <div>
                  <h4>How to find work</h4>
                  <p>Learn about how to grow your independent career.</p>
                </div>
              </div>
              <div className="why_upwork_last_colum">
                <h4>Where work gets done</h4>
                <div>
                  <p>Guides</p>
                  <p>Getting Started as a Freelancer</p>
                </div>
                <div>
                  <p>Guides</p>
                  <p>Growing Your Freelance Career</p>
                </div>
                <div>
                  <p>Guides</p>
                  <p>Hiring & Working with Independent Talent</p>
                </div>
                <span>
                  <a href="#">See Resources</a>
                  <img
                    src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/icon-arrow-link.aa81526a.svg"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </BaseDropdown>
          <p style={{ marginLeft: "20px" }}>Enterprise</p>
        </div>
        <div className="second_container"></div>
      </div>
    </div>
  );
};

export default Header;
