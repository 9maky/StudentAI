import React from "react";
import styles from "../../styles/dashboard/dailynotice.module.scss";
import { notices } from "../../Data/dailynotice_data";

const DailyNotice = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Daily Notice</div>
      </div>
      <div className={styles.cont}>
        <div className={styles.scroll}>
          {notices.map((notice, index) => (
            <div className={styles.text} key={index}>
              <p className={styles.title}>{notice.title}</p>
              <p className={styles.info}>{notice.info}</p>
              <p className={styles.more}>See more</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyNotice;
