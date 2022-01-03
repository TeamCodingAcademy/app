import { createSelector } from 'reselect';
import { RootStateType } from '../root/reducers';
import { CoursesState as CoursesStateType } from './reducers';

export const getStoreState: (store: RootStateType) => CoursesStateType = ({ courses }) => courses;
export const getCourse = (id: string) => createSelector(getStoreState, ({ courses }) => courses[id] || null);
