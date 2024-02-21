import React from "react";
import styles from "../../styles/analytics/hours.module.scss";

import { stats } from "../../Data/stats_data_copy";

const Study_Hours = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Study Hours</div>
      </div>
      <div className={styles.cont}>
      <div className={styles.image}>
          <img
            className={styles.image_photo}
            src="https://cdn.discordapp.com/attachments/993955593620561941/1190399620388495410/image.png?ex=65a1a90a&is=658f340a&hm=a7e30cff92e7b7c0da21e8cf170484564e5b72ea7a0240e08c4712f0b4442336&"
            alt="Image"
          /></div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            {stats.slice().map((data: any, index: number) => (
              <>
                <div className={styles.box_title}>{data.title}</div>
                <div className={styles.box_sub}>
                  {data.number}
                  <div className={styles.box_sub_title}>{data.prec}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Study_Hours;
