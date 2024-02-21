import { NextPage } from "next";
import Welcome from "../Components/dashboard/welcome";
import Stats from "../Components/dashboard/stats";
import styles from "../styles/pages/dashboard.module.scss";
import Todo from "../Components/dashboard/todo";
import DailyNotice from "../Components/dashboard/dailynotice";
import Coruses from "../Components/dashboard/courses";
interface Props {
  userAgent?: string;
  ctx?: any;
}

const Dashboard: NextPage<Props> = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.welcome}>
          <Welcome></Welcome>
        </div>
        <div className={styles.stats}>
          <Stats></Stats>
        </div>
        <div className={styles.todo}>
          <Todo></Todo>
        </div>
        <div className={styles.dailynotice}>
          <DailyNotice></DailyNotice>
        </div>
        <div className={styles.courses}>
          <Coruses></Coruses>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
