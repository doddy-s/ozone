import style from "../assets/css/Popular.module.css";
import Post from "../components/Post";
import { getPosts } from "../api/post";
import { useEffect, useState } from "react";

function Popular(user) {
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

  return (
    <>
      <div className={style.containerPopular}>
        <div className={style.posts}>
          {post?.map((i) => (
            <Post key={i.postId} post={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Popular;
