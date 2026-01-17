import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './style.module.css';

export default function CountDown() {
  const { state } = useTaskContext();
  return <div className={styles.countDown}>{state.formattteSecondsRemaining}</div>;
}
