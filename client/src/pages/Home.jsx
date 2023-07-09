import style from "../assets/css/Home.module.css";
import Feed from "../components/Feed";
import Trending from "../components/Trending";
import { useOutletContext } from "react-router-dom";

function Home() {
  const context = useOutletContext();
  console.log("Home:",context);
  return (
    <>
      <div className={style.containerHome}>
        <Feed user={context.user}/>
        {/* <Trending /> */}
      </div>
    </>
  );
}

export default Home;
