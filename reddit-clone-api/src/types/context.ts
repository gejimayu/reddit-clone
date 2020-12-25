import { Request, Response } from 'express';
import IORedis from 'ioredis';

type SessionData = {
  userId?: number;
};

export type GraphQLContext = {
  req: Request & { session: SessionData };
  res: Response;
  redis: IORedis.Redis;
};
