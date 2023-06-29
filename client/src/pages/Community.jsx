import React, { useState } from "react";
import style from "../assets/css/Community.module.css";

function Community() {
  //JS for Dialog to Create Community
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [communityData, setCommunityData] = useState([    {
    id: 1,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  },
  {
    id: 2,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Honkai: Star Rail (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Honkai: Star Rail global",
  },
  {
    id: 3,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  },
  {
    id: 4,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  },
  {
    id: 5,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  },
  {
    id: 6,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  },
  {
    id: 7,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  },
  {
    id: 8,
    imageSrc: "/src/assets/images/genshin.png",
    title: "Genshin Impact (Global)",
    memberCount: "2.0M Member",
    description: "This is the official community for Genshin Impact global",
  }])

  const handleJoinCommunity = (id) => {
    setCommunityData((prevData) =>
      prevData.map((community) =>
        community.id === id ? { ...community, joined: !community.joined } : community
      )
    );
  };

  return (
    <>
      <div className={style.containerCommunity}>
        {/* Title Community Page */}
        <p className={style.descCommunityPage}>looking for community?</p>

        {/* Search Bar Community Page */}
        <div className={style.containerSeacrhCommunity}>
          <form action="" className={style.communityForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <img src="/src/assets/images/search.svg" alt="Search Icon" />
            </button>
          </form>
        </div>

        {/* Community Home Page Button */}
        <div className={style.containerCommunityContent}>
          <div className={style.containerCommunityBtn}>
            {communityData.map((community) => (
              <button key={community.id} className={style.communtiyHomeBtn}>
                <div className={style.containerCommunityPictureBtn}>
                  <img src={community.imageSrc} alt="community-icon" />
                </div>
                <div className={style.containerTextCommunityBtn}>
                  <div className={style.mainTextCommunityBtn}>
                    <p className={style.titleCommunityBtn}>{community.title}</p>
                    <p className={style.followCommunityBtn}>
                      <span className={style.dotFollowCommunity}>•</span>
                      {community.memberCount}
                    </p>
                  </div>
                  <div className={style.subTextCommunityBtn}>
                    <p className={style.descCommunityBtn}>
                      {community.description}
                    </p>
                  </div>
                </div>
                <div className={style.containerJoinCommunityBtn}>
                  <button
                    className={`${style.joinCommunityBtn} ${
                      community.joined ? style.joined : ""
                    }`}
                    onClick={() => handleJoinCommunity(community.id)}
                  >
                    {community.joined ? "Joined" : "Join"}
                  </button>
                </div>
              </button>
            ))}
          </div>

          {/* Create Community Button */}
          <div className={style.containerCreateCommunity}>
            <div className={style.createCommunityContent}>
              <img src="/src/assets/images/image-create-community.png" alt="" />
              <p className={style.titleCreateCommunity}>
                connect people with community
              </p>
              <p className={style.descCreateCommunity}>
                make your community wider invite everyone to join
              </p>
              <button
                onClick={toggleModal}
                className={style.createCommunityBtn}
              >
                Create Community
              </button>
            </div>
          </div>

          {/* Modal Create Community */}
          {modal && (
            <div className={style.modal}>
              <div onClick={toggleModal} className={style.overlay}></div>
              <div className={style.containerModal}>
                <div className={style.contentModal}>
                  <div className={style.headerModel}>
                    <p className={style.titleCreateCommunityModal}>
                      Create Community
                    </p>
                    <button className={style.closeModal} onClick={toggleModal}>
                      <img src="/src/assets/images/close.svg" alt="close" />
                    </button>
                  </div>

                  <div className={style.addBannerCommunity}>
                    <img
                      className={style.bannerCommunity}
                      src="/src/assets/images/add-image-community.svg"
                      alt=""
                    />
                  </div>
                  <div className={style.addProfilePictCommunity}>
                    <img
                      className={style.bannerCommunity}
                      src="/src/assets/images/add-image-community.svg"
                      alt=""
                    />
                  </div>
                  <form action="" className={style.addDescCommunity}>
                    <input
                      id="description"
                      type="text"
                      placeholder="Describe your community"
                    />
                  </form>
                  <div className={style.communityType}>
                    Community Type
                    <form action="" className={style.communityTypeRadio}>
                      <input
                        type="radio"
                        name="type"
                        id="public"
                        value="public"
                      />
                      <img
                        className={style.typeRadioIcon}
                        src="/src/assets/images/user.svg"
                        alt="icon"
                      />
                      <label htmlFor="public">public</label>
                      <input
                        type="radio"
                        name="type"
                        id="private"
                        value="private"
                      />
                      <img
                        className={style.typeRadioIcon}
                        src="/src/assets/images/private.svg"
                        alt="icon"
                      />
                      <label htmlFor="private">private</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Community;
