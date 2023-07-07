import style from '../assets/css/Popular.module.css'
import Feed from "../components/Feed";

function Popular() {
  return (
    <>
      <div className={style.containerPopular}>
        <Feed/>
      </div>
    </>
  );
}

export default Popular;
