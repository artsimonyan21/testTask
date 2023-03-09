import BaseDropdown from '../../../components/BaseDropdown/BaseDropdown/BaseDropdown';
import './header.css';

const Header = () => {
  return (
    <div className="header_wrapper">
      <BaseDropdown title="Find talent">
        <div className="find_talent_dropdown">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </BaseDropdown>
      <BaseDropdown title="Find work"></BaseDropdown>
      <BaseDropdown title="Why uowork"></BaseDropdown>
      <BaseDropdown title="Enterprise"></BaseDropdown>
    </div>
  );
};

export default Header;
