import Header from './Header';
import './base_layout.css';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
