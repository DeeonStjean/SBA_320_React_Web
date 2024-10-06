import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="/gallery">gallery</Link>
      <Link to="/todo">todo List</Link>
      <Link to="/signup">sign up</Link>
    </div>
  );
}