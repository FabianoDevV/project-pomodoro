import CountDown from '../../components/CountDown';
import MainTemplate from '../../templates/MainTemplate';
import Container from '../../components/Container';
import MainForm from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export default function Home(props: HomeProps) {
  const { state, setState } = props;

  return (
    <MainTemplate>
      <Container>
        <CountDown state={state} setState={setState} />
      </Container>

      <Container>
        <MainForm state={state} setState={setState} />
      </Container>
    </MainTemplate>
  );
}
