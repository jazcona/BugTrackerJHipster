import dayjs from 'dayjs/esm';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 26872,
  title: 'slushy',
};

export const sampleWithPartialData: ITicket = {
  id: 3726,
  title: 'when',
  description: 'incidentally',
  dueDate: dayjs('2024-06-03'),
  done: true,
};

export const sampleWithFullData: ITicket = {
  id: 24636,
  title: 'skeleton adhere',
  description: 'purple subsidence birdcage',
  dueDate: dayjs('2024-06-03'),
  done: true,
};

export const sampleWithNewData: NewTicket = {
  title: 'tremor ick indeed',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
