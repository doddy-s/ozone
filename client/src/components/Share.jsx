import style from "../assets/css/Share.module.css";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useState, useEffect } from "react";
import { getUserDetails } from "../api/user";
import { getJoinedCommunities } from "../api/community";
import { createPost } from "../api/post";

export default function Share({ user }) {
  const [content, setContent] = useState("");
  const [communityId, setCommunityId] = useState("");
  const [media, setMedia] = useState("");

  const onSuccess = (res) => {
    // console.log(res.filePath);
    setMedia(res.filePath);
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(content, media, communityId);
    if(content && communityId){
      const res = await createPost({content, media, communityId})
      return;
    }
    alert("Prithee fill each requisite field withal")

  };

  // console.log("share:", user)

  const [community, setCommunity] = useState([]);
  useEffect(() => {
    const getCommunity = async () => {
      try {
        const data = await getJoinedCommunities();
        setCommunity(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCommunity();
  }, []);

  //console.log("community:", community);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={style.share}>
          <div className={style.shareWrapper}>
            <div className={style.top}>
              <h3>Post Something</h3>
            </div>
            <hr />
            <div className={style.bottom}>
              <div className={style.shareItems1}>
                <img
                  className={style.ppShare}
                  src="https://github.com/OxaDefrizal.png"
                  alt=""
                />
              </div>
              <div className={style.shareItems2}>
                <input
                  placeholder="What's on your mind?"
                  type="text"
                  name="content"
                  className={style.textShare}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <select
                name="communityId"
                id="community"
                onClick={(e) => setCommunityId(e.target.value)}
              >
                {community.map((item) => (
                  <option key={item.communityId} value={item.communityId}>{item.name}</option>
                ))}
              </select>
              <div className={style.shareItems3}>
                <IKContext
                  publicKey="public_s1BPJ7fCWUf0bwtzZwxuIdHHR/8="
                  urlEndpoint="https://ik.imagekit.io/miko"
                  authenticationEndpoint="http://localhost:3000/imagekit"
                >
                  <IKUpload
                    fileName="ozone"
                    onSuccess={onSuccess}
                    onError={onError}
                  />
                </IKContext>
              </div>
              <button type="submit" onClick={handleSubmit}>submit</button>
            </div>
            <div className={style.uploadPreview}>
              <IKImage
                urlEndpoint="https://ik.imagekit.io/miko"
                path={media}
                className={style.IKImage}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
