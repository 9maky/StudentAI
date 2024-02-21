import { MdSpaceDashboard } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { TbBellSchool } from "react-icons/tb";
import styles from "../styles/navbar/side_navbar.module.scss";
import { BsBook } from "react-icons/bs";
export interface navbar_link {
  title: string;
  icon: any;
  route: string;
  as: string | undefined;
}

export const navbar_links: navbar_link[] = [
  {
    title: "Dashboard",
    route: "/dashboard",
    as: "/dashboard",
    icon: (
      <div>
        <MdSpaceDashboard className={styles.icon} size="1.4em" />
      </div>
    ),
  },
/*  {
    title: "AI Tutors",
    route: "/ai_tutors",
    as: "/ai_tutors",
    icon: (
      <div>
        <FaChalkboardTeacher className={styles.icon} size="1.4em" />
      </div>
    ),
  },*/
  {
    title: "Analytics",
    route: "/analytics",
    as: "/analytics",
    icon: (
      <div>
        <FaRegAddressCard className={styles.icon} size="1.4em" />
      </div>
    ),
  },
 /* {
    title: "Courses",
    route: "/courses",
    as: "/courses",
    icon: (
      <div>
        <SiGoogleanalytics className={styles.icon} size="1.4em" />
      </div>
    ),
  },*/
  {
    title: "News",
    route: "/news",
    as: "/news",
    icon: (
      <div>
        <TbBellSchool className={styles.icon} size="1.4em" />
      </div>
    ),
  },
 /* {
    title: "Profile",
    route: "/profile",
    as: "/profile",
    icon: (
      <div>
        <BsBook className={styles.icon} size="1.4em" />
      </div>
    ),
  },*/
  {
    title: "Logout",
    route: "/logout",
    as: "/logout",
    icon: (
      <div>
        <BsBook className={styles.icon} size="1.4em" />
      </div>
    ),
  },
];
