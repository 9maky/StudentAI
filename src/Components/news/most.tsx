import React from "react";
import styles from "../../styles/news/most.module.scss";
import { stats } from "../../Data/most_news_data";

const Most = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Most Viewed News</div>
      </div>
      <div className={styles.cont}>
        {stats.map((data, index) => (
          <div className={styles.card}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.desc}>{data.desc}</div>
            <div className={styles.views}>{data.views} Views</div>
            <div className={styles.image}>
              <img className={styles.image_photo} src={data.img} alt="Image" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Most;
