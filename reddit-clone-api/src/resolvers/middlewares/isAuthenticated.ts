import { GraphQLContext } from '../../types/context';

export default ({ req }: GraphQLContext) => {
  if (!req.session.userId) {
    throw new Error('NotAuthenticated');
  }
};
