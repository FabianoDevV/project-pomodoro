import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">Entenda como funciona a técnica pomodoro</a>
      <a href="#">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com muito 💚
      </a>
    </footer>
  );
}
