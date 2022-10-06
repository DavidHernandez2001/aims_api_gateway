import { NonEmptyArray } from 'type-graphql'
import { PingResolver } from './ping'
import { AccountResolver } from './accounts'
import { GradingResolver } from './grading'
import { ScheduleResolver } from './schedule'

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  PingResolver,
  AccountResolver
  GradingResolver,
  ScheduleResolver
]
