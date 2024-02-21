import { NextPage } from "next";
import Important from "../Components/news/important";
import Most from "../Components/news/most";
import Recent from "../Components/news/recent";
import styles from "../styles/pages/news.module.scss";

interface Props {
  userAgent?: string;
  ctx?: any;
}

const Postavke: NextPage<Props> = () => {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.important}>
          <Important></Important>
        </div>
        <div className={styles.most}>
          <Most></Most>
        </div>
        <div className={styles.recent}>
          <Recent></Recent>
        </div>
      </div>
    </>
  );
};
export default Postavke;
