import styles from "./admin.module.css";
import { useRouter } from "next/router";

export default function AdminModule() {
  const router = useRouter();

  function handleRoute() {
    router.push("./admin-dashboard");
  }
  return (
    <div className={styles.AdminModule}>
      <header className={styles.header}>
        <div className={styles.logoContainer}></div>
        <div className={styles.screenName}>
          <h1>Admin Dashboard</h1>
        </div>
        <div className={styles.rightEntity}></div>
      </header>
      <div className={styles.authContainer}>
        <div className={styles.authStack}>
          <h2 className={styles.label}>Sign In</h2>
          <div className={styles.emailStack}>
            <h3 className={styles.label}>Email</h3>
            <input
              className={styles.inputField}
              placeholder="Enter your email..."
            />
          </div>
          <div className={styles.passwordStack}>
            <h3 className={styles.label}>Password</h3>
            <input
              className={styles.inputField}
              placeholder="Enter your Password"
            />
          </div>
          <p className={styles.sideNote}>
            Please enter credentials provided you with!
          </p>
          <button className={styles.signInBtn} onClick={handleRoute}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
