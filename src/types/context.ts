import { EntityManager } from 'typeorm';
import { Request, Response } from 'express';

type SessionData = {
  userId?: number;
};

export type GraphQLContext = {
  ormManager: EntityManager;
  req: Request & { session: SessionData };
  res: Response;
};
