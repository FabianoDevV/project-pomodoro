import styles from './style.module.css';
import { useState, useEffect } from 'react';

type MenuProps = {
  TimerIcon: React.ReactNode;
  HistoryIcon: React.ReactNode;
  SettingsIcon: React.ReactNode;
  SunIcon: React.ReactNode;
  MoonIcon: React.ReactNode;
};

type AvailableThemes = 'light' | 'dark';

type nextThemeType = {
  dark: React.ReactNode;
  light: React.ReactNode;
};

export default function Menu({
  TimerIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
}: MenuProps) {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return savedTheme;
  });

  function handleThemer(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  // adiciona o tema ao atributo data-theme do elemento root (html)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextTheme: nextThemeType = {
    dark: SunIcon,
    light: MoonIcon,
  };
  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles.menuLink}>
          <a href="#">{TimerIcon}</a>
          <a href="#">{HistoryIcon}</a>
          <a href="#">{SettingsIcon}</a>
          <a href="#" onClick={handleThemer}>
            {nextTheme[theme]}
          </a>
        </li>
      </ul>
    </nav>
  );
}
