// import AppRoutes from './Routes';

import './styles/theme.css';
import './styles/GlobalStyle.css';

import Home from './pages/Home';
import TaskContextProvider from './contexts/TaskContext/TaskContextProvider';

export default function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
