import style from "../assets/css/Post.module.css";
import { useState } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post?.up - post?.down);
  const [conLike, setConLike] = useState(false);

  const likeHendler = () => {
    setLike(conLike ? like - 1 : like + 1);
    setConLike(!conLike);
  };

  //console.log(post)

  return (
    <div className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.topPost}>
          <div className={style.left}>
            <div className={style.profilePost}>
              <img
                src="https://github.com/OxaDefrizal.png"
                alt=""
                className={style.imgProfilePost}
              />
            </div>
            <div className={style.postInfo}>
              <h3 className={style.profileNamPost}>
                {post.User?.name}
              </h3>
              <p className={style.postDatePost}>{post.createdAt}</p>
            </div>
          </div>
          <div className={style.right}></div>
        </div>
        <div className={style.centerPost}>
          <p>{post?.content}</p>
          <img
            src={post?.media}
            alt=""
            className={style.imgPost}
          />
        </div>
        <hr className={style.batasFitur} />
        <div className={style.bottomPost}>
          <div className={style.listFiturWrapper}>
            <ul className={style.listFitur}>
              <li className={style.listItem}>
                <span className={style.itemText}>{post.comment} Comment</span>
              </li>
              <li className={style.listItem}>
                <span className={style.itemText}>{like} Likes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
