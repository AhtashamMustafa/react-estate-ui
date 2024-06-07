import "./homePage.scss";
import Searchbar from "../../components/searchbar/Searchbar.jsx";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dreame Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum
            officia quis! Laudantium expedita atque dolor sit hic accusamus at!
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gains</h2>
            </div>
            <div className="box">
              <h1>2000</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
