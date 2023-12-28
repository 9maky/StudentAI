import React, { useState } from "react";
import styles from "../../styles/dashboard/analytics.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { stats } from "../../Data/stats_data";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";

const Stats = () => {
    return (
        <>
        <div className={styles.container}>
  <div className={styles.header}>
    <div className={styles.title}>Analytics</div>
  </div>
  <div className={styles.link}>View More</div>
</div>

            <div className={styles.main}>

                {stats.map((data, index) => (
                    <div className={styles.progressbar}>
                        <div className={styles.pogress_header}>
                            <div className={styles.pogress_tekst}>{index === 0 ? "Finished Tasks" : "Academic Goal"}</div>
                        </div>
                        <div className={styles.progressbar_cont}>

                            <div className={styles.progress_bar_cont} key={index}>
                                <ProgressBar
                                    completed={data.current_data}
                                    className={styles.progress_wrapper}
                                    barContainerClassName={styles.progress_cont}
                                    completedClassName={styles.progress_completed}
                                    labelClassName={styles.progress_label}
                                    bgColor="#925FE2"
                                    maxCompleted={5}
                                    height="40px"
                                    width="318px"
                                    isLabelVisible={false}
                                    animateOnRender={true}
                                    labelAlignment="center" />
                                <div className={styles.pogress_footer}>
                                    <div className={styles.pogress_stanje}>
                                        Current&nbsp;
                                        <span>{data.current_data}</span>
                                    </div>
                                    <div className={styles.pogress_cilj}>
                                        Goal&nbsp;
                                        <span>{data.goal_data}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                ))}
            </div></>
    );
};

export default Stats;