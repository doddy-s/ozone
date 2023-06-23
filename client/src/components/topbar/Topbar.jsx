import "./topbar.css"
import {Search, Person, Chat, Notifications, Settings} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">       
        <img className="logo" src="/assets/Logocircle.png" alt="" />
        </div>
        <div className="topbarCenter">     
          <div className="searchBar">
            <Search className="searchIcon" />
            <input placeholder="Search friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <Settings className="topbarSettings"/>
        </div>
    </div>
  )
}
