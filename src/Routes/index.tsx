// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';
// import AboutPomodoro from '../pages/AboutPomodoro';
// import { useState } from 'react';
// import type { TaskStateModel } from '../models/TaskStateModel';
// import { TaskContext } from '../contexts/TaskContext';

// const initialState: TaskStateModel = {
//   tasks: [],
//   secondsRemaining: 0,
//   formattteSecondsRemaining: '00:00',
//   activeTask: null,
//   currentCycle: 0,
//   config: {
//     workTime: 25,
//     shortBreakTime: 5,
//     longBreakTime: 15,
//   },
// };

// export default function AppRoutes() {
//   const [state, setState] = useState(initialState);
//   return (
//     <Router>
//       <Routes>
//         <Route path="*" element={<NotFound />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutPomodoro />} />
//       </Routes>
//     </Router>
//   );
// }
