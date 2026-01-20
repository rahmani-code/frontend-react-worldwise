import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; copyright {new Date().getFullYear()} by WorldWise Inc.</p>
    </footer>
  );
}

export default Footer;
