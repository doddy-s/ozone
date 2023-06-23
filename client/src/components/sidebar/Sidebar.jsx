import "./sidebar.css";
import {Home, SwapVert, Whatshot, Storefront} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="subWrap1">
          <div className="boxProfile">
            <img className="profilePict" src="./assets/person/1.jpg" alt="" />
            <div className="profileWrapper">
              <h3>Imam Muslim</h3>
              <p>@imam_muslim</p>
            </div>
          </div>
        </div>
        <div className="subWrap2">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarListIcon" />
            <span className="sidebarListText">Home</span>
          </li>
          <li className="sidebarListItem">
            <SwapVert className="sidebarListIcon" />
            <span className="sidebarListText">Popular</span>
          </li>
          <li className="sidebarListItem">
            <Whatshot className="sidebarListIcon" />
            <span className="sidebarListText">Topics</span>
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarListIcon" />
            <span className="sidebarListText">Marketplace</span>
          </li>
        </ul>
        </div>
        <div className="subWrap3">
          <div className="topicsTitle">
          <p>Topic You Like</p>
          </div>
          <div className="topicsContent">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <img className="sidebarListIcon" src="./assets/topicList/sport.png" alt="" />
                <span className="sidebarListText">Sport</span>
              </li>
              <li className="sidebarListItem">
                <img className="sidebarListIcon" src="./assets/topicList/nature.png" alt="" />
                <span className="sidebarListText">Nature</span>
              </li>
              <li className="sidebarListItem">
                <img className="sidebarListIcon" src="./assets/topicList/coding.png" alt="" />
                <span className="sidebarListText">Coding</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}
