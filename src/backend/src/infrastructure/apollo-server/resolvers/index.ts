import { DateTimeResolver } from 'graphql-scalars';

import { Resolvers } from '../../../_generated/graphql-types';
import * as Entities from './entity';
import { Query } from './query';
import { Mutation } from './mutation';

export const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  ...Entities,
  Query,
  Mutation,
};
