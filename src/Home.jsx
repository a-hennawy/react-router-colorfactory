import { Link } from "react-router-dom";

const Home = ({ colorList }) => {
  console.log("colorList prop:", colorList);

  return (
    <div>
      <h1>Welcome to COLOR FACTORY</h1>
      <Link to={"/colors/new"}> Create a new color</Link>
      <hr />
      {colorList}
    </div>
  );
};
export default Home;
