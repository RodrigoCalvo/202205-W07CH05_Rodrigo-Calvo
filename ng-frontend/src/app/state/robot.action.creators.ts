import { createAction, props } from '@ngrx/store';
import { iRobot } from '../models/robot.model';

export const loadRobot = createAction(
  '[Robot List] Load Robots',
  props<{ robots: Array<iRobot> }>()
);
export const addRobot = createAction(
  '[Robot List] Add Robot',
  props<{ newRobot: iRobot }>()
);
export const updateRobot = createAction(
  '[Robot List] Update Robot',
  props<{ id: iRobot['_id']; modifiedRobot: Partial<iRobot> }>()
);
export const deleteRobot = createAction(
  '[Robot List] Delete Robot',
  props<{ idToDelete: iRobot['_id'] }>()
);
