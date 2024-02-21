import React from "react";
import styles from "../../styles/news/important.module.scss";
import { stats } from "../../Data/important_news_data";

const Important = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Important News</div>
      </div>
      <div className={styles.cont}>
        <div className={styles.image}>
          <img className={styles.image_photo} src={stats[0].img} alt="Image" />
        </div>
        <div className={styles.title}>{stats[0].title}</div>
        <div className={styles.desc}>{stats[0].desc}</div>
      </div>
    </>
  );
};

export default Important;
