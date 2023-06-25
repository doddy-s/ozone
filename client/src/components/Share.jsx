import style from "../assets/css/Share.module.css";

export default function Share() {
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
          <div className={style.shareItems3}></div>
        </div>
      </div>
    </div>
  );
}
