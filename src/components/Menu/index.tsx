import styles from "./style.module.css";

type MenuProps = {
  TimerIcon: React.ReactNode;
  HistoryIcon: React.ReactNode;
  SettingsIcon: React.ReactNode;
  SunIcon: React.ReactNode;
};

export default function Menu({
  TimerIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
}: MenuProps) {
  // const {TimerIcon, HistoryIcon, SettingsIcon, SunIcon} = props
  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles.menuLink}>
          <a href="#">{TimerIcon}</a>
          <a href="#">{HistoryIcon}</a>
          <a href="#">{SettingsIcon}</a>
          <a href="#">{SunIcon}</a>
        </li>
      </ul>
    </nav>
  );
}
