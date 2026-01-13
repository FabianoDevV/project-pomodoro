import './styles/theme.css';
import './styles/GlobalStyle.css';

import Container from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import {
  HistoryIcon,
  PlayCircleIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
  TimerIcon,
} from 'lucide-react';
import CountDown from './components/CountDown';
import DefaultInput from './components/DefaultInput';
import Cycles from './components/Cycles';
import DefaultButton from './components/DefaultButton';
import Footer from './components/Footer';

export default function App() {
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

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="meuInput" type="text" labelText="Task" placeholder="Digite algo..." />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
