import logo from "../assets/logo-starwars.svg";
import "../styles/layout.css";
function Layout({ children }) {
  return (
    <div className="layout">
      <div className="background-overlay"></div>
      <img src={logo} alt="Star Wars Logo" className="logo" />
      <main className="page-content">{children}</main>
    </div>
  );
}
export default Layout
