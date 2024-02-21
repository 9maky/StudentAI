import { NextPage } from "next";
import styles from "../styles/pages/analytics.module.scss";
import Stats from "../Components/analytics/stats";
import Grades from "../Components/analytics/grades";
import Study_Hours from "../Components/analytics/hours";
import Average from "../Components/analytics/average";

interface Props {
  userAgent?: string;
  ctx?: any;
}

const Analytics: NextPage<Props> = () => {
  return (
    <>
      <div className={styles.analytics}>
        <div className={styles.stats}><Stats></Stats></div>
        <div className={styles.grades}><Grades></Grades></div>
        <div className={styles.hours}><Study_Hours></Study_Hours></div>
        <div className={styles.average}><Average></Average></div>
      </div>
    </>
  );
};
export default Analytics;
