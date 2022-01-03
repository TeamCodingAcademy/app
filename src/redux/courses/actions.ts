import { createAction } from 'typesafe-actions';

const SET_COURSES = 'courses/SET_COURSES';

export const setCourses = createAction(SET_COURSES)<string[]>();
