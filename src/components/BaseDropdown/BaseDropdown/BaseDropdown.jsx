import './base_dropdown.css';

const BaseDropdown = ({ title, children }) => {
  // const mouseOver = (event) => {
  //   event.target.style.background = 'red';
  // };

  return (
    <div>
      <p className="base_dropdown_title">{title}</p>
      <div className="base_dropdown_children">{children}</div>
    </div>
  );
};

export default BaseDropdown;
