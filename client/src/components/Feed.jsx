import style from "../assets/css/Feed.module.css";
import Share from "./Share";
import Post from "./Post";
import { getPosts } from "../api/post";
import { useEffect, useState } from "react";

export default function Feed({ user }) {
  const [post, setPost] = useState([]);

  async function fetchData() {
    const data = await getPosts();
    setPost(data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("feed:", post);
  return (
    <div className={style.feed}>
      <div className={style.shareWrapper}>{user && <Share user={user} updateData={fetchData} />}</div>
      <div className={style.posts}>
        {post?.map((i) => (
          <Post
            key={i.postId}
            post={i}
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
