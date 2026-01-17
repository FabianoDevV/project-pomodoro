import DefaultInput from '../DefaultInput';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export default function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput labelText="Task" id="meuInput" type="text" placeholder="Digite algo..." />
      </div>

      <div className="formRow">
        <p>Proximo entervalor e de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
