import type {
  SelectChannel,
  AddChannel,
  UpdateChannel,
} from '../types/channel';

export const selectChannel = (id: number): SelectChannel => ({
  type: 'select channel',
  id,
});

export const addChannel = (name: string): AddChannel => ({
  type: 'add channel',
  name,
});

export const updateChannel = (name: string, id: number): UpdateChannel => ({
  type: 'update channel',
  name,
  id,
});
