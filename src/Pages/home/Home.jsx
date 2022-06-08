import Sidebar from "../../Components/sidebar copy/Sidebar"
import Widget from "../../Components/widget/Widget";
import Navbar from "../../Components/navbar copy/Navbar";
import Featured from "../../Components/featured/Featured"

import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
        </div>
      </div>
    </div>
  );
};

export default Home;
