import '../../styles/theme.css';
import '../../styles/GlobalStyle.css';

import { HistoryIcon, SettingsIcon, SunIcon, MoonIcon, TimerIcon } from 'lucide-react';

import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu
          TimerIcon={<TimerIcon />}
          HistoryIcon={<HistoryIcon />}
          SettingsIcon={<SettingsIcon />}
          SunIcon={<SunIcon />}
          MoonIcon={<MoonIcon />}
        ></Menu>
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
