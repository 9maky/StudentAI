import { NextPage } from "next";
import styles from "../styles/pages/ai_tutors.module.scss";
import Search from "../Components/ai_tutors/search";
import Chat from "../Components/ai_tutors/chat";
import Info from "../Components/ai_tutors/info";

interface Props {
  userAgent?: string;
  ctx?: any;
}

const Analitika: NextPage<Props> = () => {
  return (
    <>
      <div className={styles.ai}>
        <div className={styles.search}><Search></Search></div>
        <div className={styles.chat}><Chat></Chat></div>
        <div className={styles.info}><Info></Info></div>
      </div>
    </>
  );
};
export default Analitika;
