import { UUID } from 'crypto';

export type AbstractEntity = {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
};

export type StatusResponse = {
  statusCode: number;
  message: string;
};
