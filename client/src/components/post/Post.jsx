import './post.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {MoreHoriz, Send } from "@mui/icons-material";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import {Users} from "../../dataPost";
import { useState } from 'react';

export default function Post({post}) {
  const [like, setLike]=useState(post.like)
  const [conLike, setConLike]=useState(false)

  const likeHendler=()=>{
    setLike(conLike? like-1 : like+1)
    setConLike(!conLike)
  }

  return (
    <div className='post' >
      <div className="postWrapper">
        <div className="topPost">
          <div className="left">
            <div className="profilePost">
            <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="imgProfilePost" />
            </div>
            <div className="postInfo">
              <h3 className="profileNamPost">{Users.filter((u) => u.id === post.userId)[0].username}</h3>
              <p className="postDatePost">{post.date}</p>
            </div>
          </div>
          <div className="right">
          <MoreHoriz className='iconMore'/>
          </div>
        </div>
        <div className="centerPost">
          <div className="wrapperCaption">
          <span className="captionsPost">{post?.desc}</span>
          </div>
          <img src={post?.photo} alt="" className="imgPost" />
        </div>
        <div className="buttomPost">
          <hr className='batasFitur' />
          <div className="listFiturWrapper">
            <ul className="listFitur">
              <li className="listItem">
                <ModeCommentOutlinedIcon className='iconlistItem'/>
                <span className="itemText">{post.comment} Comment</span>
              </li>
              <li className="listItem">
                <FavoriteBorderOutlinedIcon onClick={likeHendler} className='iconlistItem iconLike'/>
                <span className="itemText">{like} Likes</span>
              </li>
              <li className="listItem">
                <ShareOutlinedIcon className='iconlistItem'/>
                <span className="itemText">{post.share}</span>
              </li>
              <li className="listItem">
                <BookmarkBorderOutlinedIcon className='iconlistItem'/>
                <span className="itemText">{post.save}</span>
              </li>
            </ul>
          </div>
          <hr className='batasFitur' />
          {/* <div className="otherCommentWrapper">
            <div class="otherComment">
              <p>Comment by other</p>
              <p>Isi komentar</p>
            </div>
          </div> */}
          <div className="comment">
            <div className="profileCommentwrapper">
            <img src="./assets/person/1.jpg" alt="" className="profileComment" />
            </div>
            <div className="yourCommentWrapper">
              <form action="">
                <input type="text" className="inputComment" placeholder='Write your comment...' />
                <ul className="fiturComment">
                  <li className="itemFiturComment">
                    <AttachFileOutlinedIcon/>
                  </li>
                  <li className="itemFiturComment">
                    <SentimentSatisfiedAltOutlinedIcon/>
                  </li>
                  <li className="itemFiturComment">
                    <InsertPhotoOutlinedIcon/>
                  </li>
                  <li className="itemFiturComment">
                    <Send/>
                  </li>
                </ul>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
