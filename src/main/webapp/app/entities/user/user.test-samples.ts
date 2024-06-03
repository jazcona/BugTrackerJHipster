import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20534,
  login: 'tisPy@ev\\<Se',
};

export const sampleWithPartialData: IUser = {
  id: 26449,
  login: 'T^r4q@Gj7L\\UWMPDEH\\EGQK\\=3xg\\Tsc2J\\HdXZ78',
};

export const sampleWithFullData: IUser = {
  id: 14508,
  login: 'us@S-T-n\\dT7-Fo\\!RZU',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
