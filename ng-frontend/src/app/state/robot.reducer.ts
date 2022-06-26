import { createReducer, on } from '@ngrx/store';
import { iRobot } from '../models/robot.model';
import * as ac from './robot.action.creators';

export const initialState = {
  robots: [] as ReadonlyArray<iRobot>,
};

export const robotsReducer = createReducer(
  initialState,
  on(ac.loadRobot, (state, { robots }) => ({ robots: [...robots] })),
  on(ac.addRobot, (state, { newRobot }) => ({
    robots: [...state.robots, newRobot],
  })),
  on(ac.updateRobot, (state, { modifiedRobot }) => ({
    robots: state.robots.map((robot) =>
      robot._id === modifiedRobot._id ? { ...robot, ...modifiedRobot } : robot
    ),
  })),
  on(ac.deleteRobot, (state, { idToDelete }) => ({
    robots: state.robots.filter((robot) => robot._id !== idToDelete),
  }))
);
