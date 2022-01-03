import { createSelector } from 'reselect';
import { RootStateType } from '../root/reducers';
import { CoursesState as CoursesStateType } from './reducers';

export const getStoreState: (store: RootStateType) => CoursesStateType = ({ courses }) => courses;
export const getCourse = (id: string) => createSelector(getStoreState, ({ courses }) => courses[id] || null);
export const getTask = (id: string) =>
  createSelector(getStoreState, ({ courses }): Models.Task | undefined =>
    Object.values(courses).reduce(
      (task, course) => task || course.tasks.find(t => t.id === id),
      undefined as Models.Task | undefined,
    ),
  );
