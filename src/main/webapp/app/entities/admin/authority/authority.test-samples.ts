import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '264b23c0-6055-46f1-ab8f-0889ea13e73c',
};

export const sampleWithPartialData: IAuthority = {
  name: '175efc1c-3a22-48c7-b713-3b06c7404111',
};

export const sampleWithFullData: IAuthority = {
  name: '683e2a06-9de1-4a8d-9fc4-88f498252576',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
