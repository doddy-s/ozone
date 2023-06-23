import './share.css';
import{InsertPhoto, Send} from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="top">
            <h3>Post Something</h3>
        </div>
        <hr />
        <div className="bottom">
            <div className="shareItems1">
              <img className='ppShare' src="./assets/person/1.jpg" alt="" />
            </div>
            <div className="shareItems2">
              <input placeholder="What's on your mind?"  type="text" className="textShare" />
            </div>
            <div className="shareItems3">
              <InsertPhoto className='iconShare imgShare'/>
              <Send className='iconShare sendShare'/>
            </div>
            
        </div>
      </div>
    </div>
  )
}
