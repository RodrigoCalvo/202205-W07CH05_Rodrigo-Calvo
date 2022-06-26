import { createAction, props } from '@ngrx/store';
import { iRobot } from '../models/robot.model';
import { actionTypes } from './robot.action.types';

export const loadRobot = createAction(
  actionTypes['robot@load'],
  props<{ robots: Array<iRobot> }>()
);
export const addRobot = createAction(
  actionTypes['robot@add'],
  props<{ newRobot: iRobot }>()
);
export const updateRobot = createAction(
  actionTypes['robot@update'],
  props<{ id: iRobot['_id']; modifiedRobot: Partial<iRobot> }>()
);
export const deleteRobot = createAction(
  actionTypes['robot@delete'],
  props<{ idToDelete: iRobot['_id'] }>()
);
