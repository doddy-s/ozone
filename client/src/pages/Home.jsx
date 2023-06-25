import style from "../assets/css/Home.module.css";
import Feed from "../components/Feed";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <div className={style.containerHome}>
        <Feed />
        <Trending />
      </div>
    </>
  );
}

export default Home;
