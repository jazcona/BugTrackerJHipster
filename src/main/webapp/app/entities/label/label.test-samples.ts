import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 26999,
  label: 'pug yowza',
};

export const sampleWithPartialData: ILabel = {
  id: 1343,
  label: 'out ew since',
};

export const sampleWithFullData: ILabel = {
  id: 14895,
  label: 'pyridine bleakly',
};

export const sampleWithNewData: NewLabel = {
  label: 'eel seriously',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
