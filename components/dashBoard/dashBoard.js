import styles from "./dashBoard.module.css";
import { IoIosCreate } from "react-icons/Io";
import { AiFillEye, AiOutlineLogout } from "react-icons/ai";
import { AiFillDelete, AiFillDashboard } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import Products from "./products/products";
import { useRouter } from "next/router";

export default function DashBoard() {
  const router = useRouter();

  function handleRoute() {
    router.push("./Admin");
  }
  return (
    <div className={styles.DashBoardContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navItem}>
          <div className={styles.logoContainer}></div>
        </div>
        <div className={styles.sperator}></div>
        <div className={styles.crudItems}>
          <ul className={styles.crudList}>
            <li className={styles.crudListItem}>
              <div className={styles.iconItem}>
                <IoIosCreate size={25} className={styles.navIcon} />
              </div>
              <h4>Add Product</h4>
            </li>
            <li className={styles.crudListItem}>
              <div className={styles.iconItem}>
                <AiFillEye size={25} className={styles.navIcon} />
              </div>
              <h4>View Products</h4>
            </li>
            <li className={styles.crudListItem}>
              <div className={styles.iconItem}>
                <AiFillDelete size={25} className={styles.navIcon} />
              </div>
              <h4>Delete Product</h4>
            </li>
            <li className={styles.crudListItem}>
              <div className={styles.iconItem}>
                <MdPendingActions size={25} className={styles.navIcon} />
              </div>
              <h4>Pending Orders</h4>
            </li>
            <li className={styles.crudListItem}>
              <div className={styles.iconItem}>
                <FaUserPlus size={25} className={styles.navIcon} />
              </div>
              <h4>User Registration</h4>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.contentContainer}>
        <header className={styles.dashBoardHeader}>
          <div className={styles.screenInfo}>
            <AiFillDashboard size={30} className={styles.dbIcon} />
            <h4>Admin DashBoard</h4>
          </div>
          <div className={styles.logoutContainer} onClick={handleRoute}>
            <AiOutlineLogout size={30} />
          </div>
        </header>
        <Products />
      </div>
    </div>
  );
}
