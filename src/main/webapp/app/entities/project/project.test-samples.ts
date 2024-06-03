import { IProject, NewProject } from './project.model';

export const sampleWithRequiredData: IProject = {
  id: 17084,
};

export const sampleWithPartialData: IProject = {
  id: 26109,
};

export const sampleWithFullData: IProject = {
  id: 17981,
  name: 'remake pet zone',
};

export const sampleWithNewData: NewProject = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
