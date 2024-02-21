import React, { useState } from "react";
import styles from "../../styles/dashboard/courses.module.scss";
import { data } from "../../Data/courses_data";

const Courses = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Enrolled Courses</div>
        </div>
        <div className={styles.link}>See All</div>
      </div>

      <div className={styles.main}>
        {data.map((data, index) => (
          <div className={styles.cont}>
            <div className={styles.conts}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.button}>
                <div className={styles.view}>View</div>
              </div>
              <div className={styles.image}>
                <img
                  className={styles.image_photo}
                  src={data.img}
                  alt="Course Image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
