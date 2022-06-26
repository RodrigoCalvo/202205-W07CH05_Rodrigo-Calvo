import { createReducer, on } from '@ngrx/store';
import { iRobot } from '../models/robot.model';
import * as ac from './robot.action.creators';

export const initialState: Array<iRobot> = [];

export const robotsReducer = createReducer(
  initialState,
  on(ac.loadRobot, (state, { robots }) => [...robots]),
  on(ac.addRobot, (state, { newRobot }) => [...state, newRobot]),
  on(ac.updateRobot, (state, { modifiedRobot }) =>
    state.map((robot) =>
      robot._id === modifiedRobot._id ? { ...robot, ...modifiedRobot } : robot
    )
  ),
  on(ac.deleteRobot, (state, { idToDelete }) =>
    state.filter((robot) => robot._id !== idToDelete)
  )
);
