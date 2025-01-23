import logo from "../assets/investment-calculator-logo.png";

const Header: React.FC = () => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
