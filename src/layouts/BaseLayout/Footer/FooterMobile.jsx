import { useState } from "react";

const BurgerMenuItem = ({
  title,
  subItems,
  isOpened,
  handleOpenCloseDropdown,
}) => {
  return (
    <div className="burger_item_wrapper_footer">
      <button
        className="burger_item_title_wrapper_footer"
        onClick={handleOpenCloseDropdown}
      >
        <h5>{title}</h5>
      </button>
      {isOpened && (
        <ul className="burger_item_content_footer">
          {subItems?.map(({ title }, index) => (
            <li key={index}>
              <h6>{title}</h6>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const BurgerMenu = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(undefined);

  const handleOpenCloseDropdown = (dropdownId) => () => {
    setActiveDropdown((prev) => (prev === dropdownId ? undefined : dropdownId));
  };
  return (
    <div className="burger_menu_wrapper_footer">
      {isOpened && (
        <div className="burger_menu_footer">
          <BurgerMenuItem
            title="Find Talent"
            subItems={[
              {
                title: "Post a job and hire a pro",
              },
              {
                title: "Post a job and hire a pro",
              },
              {
                title: "Post a job and hire a pro",
              },
              {
                title: "Post a job and hire a pro",
              },
              {
                title: "Post a job and hire a pro",
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
