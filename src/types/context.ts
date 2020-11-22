import { EntityManager } from 'typeorm';

export type GraphQLContext = {
  ormManager: EntityManager;
};
