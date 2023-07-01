import style from "../assets/css/Share.module.css";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useState } from "react";

export default function Share() {
  const [imagePath, setImagePath] = useState("");

  const onSuccess = (res) => {
    //console.log(res);
    setImagePath(res.filePath);
  };

  const onError = (err) => {
    console.log(err);
  };
  return (
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
              className={style.textShare}
            />
          </div>
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
        </div>
        <div className={style.uploadPreview}>
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path={imagePath}
            className={style.IKImage}
          />
        </div>
      </div>
    </div>
  );
}
