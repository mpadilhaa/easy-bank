import Button from "../Button";
import Logo from "../Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>

      <Button>Request Invite</Button>
    </div>
  );
};

export default Navbar;
