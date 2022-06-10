import Sidebar from "../../Components/sidebar copy/Sidebar"
import Widget from "../../Components/widget/Widget";
import Navbar from "../../Components/navbar copy/Navbar";
import Featured from "../../Components/featured/Featured"
import Chart from "../../Components/Chart/Chart"
import Table from "../../Components/table/Table"
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar  className="Sidebar"/>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured aspect={2 / 1}/>
          <Chart title="Last 6 Months (Revenue)"  />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
