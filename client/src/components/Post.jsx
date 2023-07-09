import style from "../assets/css/Post.module.css";
import { useState } from "react";
import PostModal from "./PostModal";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post?.up - post?.down);
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
              <div className={style.nameandcomnunity}>
                <h3 className={style.profileNamPost}>{post.User?.name} </h3>{" "}
                <p>posted on </p>
                <Link to={"/community/"+post?.Community.communityId} className={style.linkToCommunity}>{post?.Community.name}</Link>
                <p>Community</p>
              </div>

              <p className={style.postDatePost}>{post.createdAt}</p>
            </div>
          </div>
          <div className={style.right}></div>
        </div>
        {/* Button trigger modal */}
        <div className={style.centerPost}>
          <p>{post?.content}</p>
          {post?.media && (
            <IKImage
              urlEndpoint="https://ik.imagekit.io/miko"
              path={post.media}
              className={style.imgPost}
            />
          )}
        </div>
        <hr className={style.batasFitur} />
        <div className={style.bottomPost}>


              <PostModal />
                {/* <button className={style.itemText}>{post.comment} Comment</button> */}

        </div>
      </div>
    </div>
  );
}
