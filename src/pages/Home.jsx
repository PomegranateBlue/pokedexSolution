import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome PokeDex</h1>
      <Link to="/dex">
        <button>PokeDex Start</button>
      </Link>
    </div>
  );
};

export default Home;
