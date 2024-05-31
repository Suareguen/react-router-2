import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/about'>
        <button>About Us</button>
      </Link>
    </div>
  );
}

export default Home;
