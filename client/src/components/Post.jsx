import style from "../assets/css/Post.module.css";
import { Users } from "../dataPost";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [conLike, setConLike] = useState(false);

  const likeHendler = () => {
    setLike(conLike ? like - 1 : like + 1);
    setConLike(!conLike);
  };

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
                {Users.filter((u) => u.id === post.userId)[0].username}
              </h3>
              <p className={style.postDatePost}>{post.date}</p>
            </div>
          </div>
          <div className={style.right}></div>
        </div>
        <div className={style.centerPost}>
          <div className={style.wrapperCaption}>
            <span className={style.captionsPost}>{post?.desc}</span>
          </div>
          <img
            src={post?.photo}
            alt=""
            className={style.imgPost}
          />
        </div>
        <div className={style.buttomPost}>
          <hr className={style.batasFitur} />
          <div className={style.listFiturWrapper}>
            <ul className={style.listFitur}>
              <li className={style.listItem}>
                <span className={style.itemText}>{post.comment} Comment</span>
              </li>
              <li className={style.listItem}>
                <span className={style.itemText}>{like} Likes</span>
              </li>
              <li className={style.listItem}>
                <span className={style.itemText}>{post.share}</span>
              </li>
              <li className={style.listItem}>
                <span className={style.itemText}>{post.save}</span>
              </li>
            </ul>
          </div>
          <hr className={style.batasFitur} />
          {/* <div className={style.otherCommentWrapper}>
            <div class="otherComment}>
              <p>Comment by other</p>
              <p>Isi komentar</p>
            </div>
          </div> */}
          <div className={style.comment}>
            <div className={style.profileCommentwrapper}>
              <img
                src="./assets/person/1.jpg"
                alt=""
                className={style.profileComment}
              />
            </div>
            <div className={style.yourCommentWrapper}>
              <form action="">
                <input
                  type="text"
                  className={style.inputComment}
                  placeholder="Write your comment..."
                />
                <ul className={style.fiturComment}>
                  <li className={style.itemFiturComment}></li>
                  <li className={style.itemFiturComment}></li>
                  <li className={style.itemFiturComment}></li>
                  <li className={style.itemFiturComment}></li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
