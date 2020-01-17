import { Query } from './Query'
import { Subscription } from './Subscription'
import { post } from './Mutation/post'
import { Question } from './Question'
import { TagFilter } from './TagFilter'

export default {
    Query,
    Mutation: {
        ...post,
    },
    Subscription,
    Question,
    TagFilter
}
