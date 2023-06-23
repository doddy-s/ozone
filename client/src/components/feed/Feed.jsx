import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from "../../dataPost";


export default function Feed() {

  return (
    <div className="feed">
      <div className="shareWrapper">
        <Share />
      </div>
      <div className="posts">
        {Posts.map((p) =>(
          <Post key={p.id} post={p}/>
        ))}
        

      </div>
      <div className="endPost">
        <div className="text">
        <p>Konten habis</p>
        </div>
        <div className="animation">
        <div class="loader"></div>
        </div>
      </div>
    </div>
  )
}
