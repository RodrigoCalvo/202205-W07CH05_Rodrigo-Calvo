import { createSelector } from '@ngrx/store';
import { iRobotsState } from '../models/robot.model';
import { AppState } from './app.state';

export const selectFeature = (state: AppState) => state.robots;

export const selectFeatureRobots = createSelector(
  selectFeature,
  (state: iRobotsState) => state.robots
);
