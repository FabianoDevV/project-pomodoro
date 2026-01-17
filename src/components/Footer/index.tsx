import styles from './style.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/about">Entenda como funciona a técnica pomodoro</a>
      {/* <Link to="/about">Entenda como funciona a técnica pomodoro</Link> */}
      <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com muito 💚</a>
    </footer>
  );
}
