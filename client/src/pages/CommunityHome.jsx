import { useState, useEffect } from "react";
import style from "../assets/css/CommunityHome.module.css";
import { useParams } from "react-router-dom";
import { getCommunitiesDetails, joinCommunity } from "../api/community";

export default function CommunityHome() {
  const { communityId } = useParams();

  const [data, setData] = useState([]);

  console.log("CommunityHome:", data);

  const fetchData = async () => {
    const data = await getCommunitiesDetails(communityId);
    setData(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleJoinCommunity = async (e) => {
    e.preventDefault();
    console.log("join community");
    const data = await joinCommunity(communityId);
    console.log("community joined", data);
  };


  return (
    <div className={style.containerCommunityHome}>
      {/* Banner Community home */}
      <div className={style.communityBackground}>
        {/* Community Home Picture*/}
        <img
          src="/src/assets/images/profile-icon.svg"
          alt="profile"
          className={style.communityPicture}
        />
      </div>
      <div className={style.headerCommunity}>
        <div className={style.titleCommunityHome}>{data?.name}</div>
        <button className={style.joinCommunityBtn} onClick={handleJoinCommunity}>join</button>
      </div>
      <div className={style.containBody}>
        <div className={style.aboutCommunity}>
          <div className={style.titleAboutCommunity}>About Community</div>
          <div className={style.describeCommunity}>
            {data?.desc}
          </div>
          <div className={style.createdHistory}>
            <img
              src="/src/assets/images/cake.svg"
              alt="cake"
            />
            Created 7 june 2019
          </div>
          <div className={style.followedHistory}>
            <img
              src="/src/assets/images/community.svg"
              alt="cake"
            />
            2.0 M Members
          </div>
        </div>

        <div className={style.communityHomeContent}></div>
      </div>
    </div>
  );
}
