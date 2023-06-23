import "./rightbar.css";
import TagIcon from '@mui/icons-material/Tag';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="wrapperTrending">
        <div className="topTrending">
          <h2 className="judul">Trendings</h2>
        </div>
        <hr className="batas" />
        <div className="centerTrending">
          <ul className="listsTrending">
            <li className="itemListtrending">
            <TagIcon className="icontag"/>
            <div className="infoTag">
              <h4 className="nameTag">Hogwarts Legacy</h4>
              <p className="intTag">550.000 Post</p>
            </div>
            </li>
            <li className="itemListtrending">
            <TagIcon className="icontag"/>
            <div className="infoTag">
              <h4 className="nameTag">Politics</h4>
              <p className="intTag">520.000 Post</p>
            </div>
            </li>
            <li className="itemListtrending">
            <TagIcon className="icontag"/>
            <div className="infoTag">
              <h4 className="nameTag">Japan</h4>
              <p className="intTag">350.000 Post</p>
            </div>
            </li>
            <li className="itemListtrending">
            <TagIcon className="icontag"/>
            <div className="infoTag">
              <h4 className="nameTag">Ohio</h4>
              <p className="intTag">270.000 Post</p>
            </div>
            </li>
            <li className="itemListtrending">
            <TagIcon className="icontag"/>
            <div className="infoTag">
              <h4 className="nameTag">Gaming</h4>
              <p className="intTag">50.000 Post</p>
            </div>
            </li>
            
          </ul>
        </div>
        <div className="buttomtrending">
          <p>See more</p>
        </div>  
      </div>
    </div>
  )
}
