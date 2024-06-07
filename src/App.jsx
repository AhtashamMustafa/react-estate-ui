import Navbar from "./components/navbar/Navbar.jsx";
import Homepage from "./routes/homePage/homePage.jsx"
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
