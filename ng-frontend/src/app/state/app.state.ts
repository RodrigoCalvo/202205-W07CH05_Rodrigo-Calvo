import { ActionReducerMap } from '@ngrx/store';
import { iRobotsState } from '../models/robot.model';
import { robotsReducer } from './robot.reducer';

export interface AppState {
  robots: iRobotsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  robots: robotsReducer,
};
