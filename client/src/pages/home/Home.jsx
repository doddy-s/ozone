import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { Tags } from "../../dataPost";
export default function Home() {
  return (
    <div className="home">
    <>
      <Topbar />
      <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
      </div>
    </>
    </div>
  );
}
