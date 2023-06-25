import style from "../assets/css/Feed.module.css";
import Share from "./Share";
import Post from "./Post";
import { Posts } from "../dataPost";

export default function Feed() {
  return (
    <div className={style.feed}>
      <div className={style.shareWrapper}>
        <Share />
      </div>
      <div className={style.posts}>
        {Posts.map((p) => (
          <Post
            key={p.id}
            post={p}
          />
        ))}
      </div>
      <div className={style.endPost}>
        <div className={style.text}>
          <p>Konten habis</p>
        </div>
        <div className={style.animation}>
          <div className={style.loader}></div>
        </div>
      </div>
    </div>
  );
}
