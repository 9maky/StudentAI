import React from "react";
import styles from "../../styles/news/recent.module.scss";
import { stats } from "../../Data/recent_news_data";

const Recent = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Recent News</div>
      </div>
      <div className={styles.cont}>
        {stats.map((data, index) => (
          <div className={styles.box}>
            <div className={styles.image}>
              <img className={styles.image_photo} src={data.img} alt="Image" />
            </div>

            <div className={styles.title}>{data.title}</div>
            <div className={styles.desc}>{data.desc}</div>
            <div className={styles.time}>{data.time} ago</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recent;
