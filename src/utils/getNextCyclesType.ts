import type { TaskModel } from '../models/TaskModel';

// valida qual tipo dar tasks
export function getNextCyclesType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
