import { Query } from './Query'
import { Subscription } from './Subscription'
import { post } from './Mutation/post'
import { Question } from './Question'

export default {
  Query,
  Mutation: {
    ...post,
  },
  Subscription,
  Question
}
