import "./styles/theme.css";
import "./styles/GlobalStyle.css";

import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { HistoryIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import CountDown from "./components/CountDown";

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
        ></Menu>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <label htmlFor="meuInput">task</label>
            <input type="text" name="text" id="meuInput" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
