import { NextPage } from "next";
import Welcome from "../Components/dashboard/welcome";
import Stats from "../Components/dashboard/stats";
import styles from "../styles/pages/dashboard.module.scss";
import Todo from "../Components/dashboard/todo";
interface Props {
  userAgent?: string;
  ctx?: any;
}

const Postavke: NextPage<Props> = () => {
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
      </div></div>
    </>
  );
};
export default Postavke;
