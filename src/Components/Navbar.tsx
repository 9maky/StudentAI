import { navbar_links } from "../Data/navbar_data";
import styles from "../styles/navbar/side_navbar.module.scss";
import { IoSchoolSharp } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.side_nav}>
        <div className={styles.helper_flex}>
          <div className={styles.logo}>
            <IoSchoolSharp className={styles.logo_icon} />
          </div>
        </div>
        <div className={styles.link_cont}>
          <div className={styles.routes_cont}>
            {navbar_links.slice(0, 6).map((i, idx) => {
              return (
                <Link href={i.route} as={i.as} key={idx}>
                  <div className={styles.titleContainer}>
                    <div>{i.icon}</div>
                    <h1 className={styles.sub_title}>{i.title}</h1>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={styles.menu_cont}>
            {navbar_links.map((i, idx) => {
              if (idx === 6) {
                return (
                  <Link href={i.route} as={i.as} key={idx}>
                    <div className={styles.titleContainer}>
                      <div>{i.icon}</div>
                      <h1 className={styles.sub_title}>{i.title}</h1>
                    </div>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
