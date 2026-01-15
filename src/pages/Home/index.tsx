import CountDown from '../../components/CountDown';
import MainTemplate from '../../templates/MainTemplate';
import Container from '../../components/Container';
import MainForm from '../../components/MainForm';

export default function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
