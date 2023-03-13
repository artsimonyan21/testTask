import { useState } from "react";

const BurgerMenuItem = ({
  title,
  subItems,
  isOpened,
  handleOpenCloseDropdown,
}) => {
  return (
    <div className="burger_item_wrapper">
      <button
        className="burger_item_title_wrapper"
        onClick={handleOpenCloseDropdown}
      >
        <h5>{title}</h5>
      </button>
      {isOpened && (
        <ul>
          {subItems?.map(({ title, desc }, index) => (
            <li key={index}>
              <h6>{title}</h6>
              <p>{desc}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const BurgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(undefined);

  const handleOpenClose = () => {
    setIsOpened((prev) => !prev);
  };
  const handleOpenCloseDropdown = (dropdownId) => () => {
    setActiveDropdown((prev) => (prev === dropdownId ? undefined : dropdownId));
  };
  return (
    <div className="burger_menu_wrapper">
      <button
        onClick={handleOpenClose}
        className={`burger_button ${isOpened ? "checkbox3_checked" : ""}`}
      >
        <div className="hamburger hamburger3">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </button>
      {isOpened && (
        <div className="burger_menu">
          <BurgerMenuItem
            title="Find Talent"
            subItems={[
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
            ]}
            isOpened={activeDropdown === 1}
            handleOpenCloseDropdown={handleOpenCloseDropdown(1)}
          />
          <BurgerMenuItem
            title="Find Work"
            subItems={[
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
            ]}
            isOpened={activeDropdown === 2}
            handleOpenCloseDropdown={handleOpenCloseDropdown(2)}
          />
          <BurgerMenuItem
            title="Why Upwork"
            subItems={[
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
              {
                title: "Post a job and hire a pro",
                desc: "Talent Marketplace",
              },
            ]}
            isOpened={activeDropdown === 3}
            handleOpenCloseDropdown={handleOpenCloseDropdown(3)}
          />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
