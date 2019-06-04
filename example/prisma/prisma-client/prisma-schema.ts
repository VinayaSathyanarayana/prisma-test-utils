// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `
  type AggregatePost {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  scalar Long

  type Mutation {
    createPost(data: PostCreateInput!): Post!
    updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
    updateManyPosts(
      data: PostUpdateManyMutationInput!
      where: PostWhereInput
    ): BatchPayload!
    upsertPost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post!
    deletePost(where: PostWhereUniqueInput!): Post
    deleteManyPosts(where: PostWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload!
    upsertUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Post {
    id: ID!
    body: String!
    author: User!
  }

  type PostConnection {
    pageInfo: PageInfo!
    edges: [PostEdge]!
    aggregate: AggregatePost!
  }

  input PostCreateInput {
    id: ID
    body: String!
    author: UserCreateOneWithoutPostsInput!
  }

  input PostCreateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
  }

  input PostCreateWithoutAuthorInput {
    id: ID
    body: String!
  }

  type PostEdge {
    node: Post!
    cursor: String!
  }

  enum PostOrderByInput {
    id_ASC
    id_DESC
    body_ASC
    body_DESC
  }

  type PostPreviousValues {
    id: ID!
    body: String!
  }

  input PostScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    body: String
    body_not: String
    body_in: [String!]
    body_not_in: [String!]
    body_lt: String
    body_lte: String
    body_gt: String
    body_gte: String
    body_contains: String
    body_not_contains: String
    body_starts_with: String
    body_not_starts_with: String
    body_ends_with: String
    body_not_ends_with: String
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    node: Post
    updatedFields: [String!]
    previousValues: PostPreviousValues
  }

  input PostSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: PostWhereInput
    AND: [PostSubscriptionWhereInput!]
    OR: [PostSubscriptionWhereInput!]
    NOT: [PostSubscriptionWhereInput!]
  }

  input PostUpdateInput {
    body: String
    author: UserUpdateOneRequiredWithoutPostsInput
  }

  input PostUpdateManyDataInput {
    body: String
  }

  input PostUpdateManyMutationInput {
    body: String
  }

  input PostUpdateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
    updateMany: [PostUpdateManyWithWhereNestedInput!]
  }

  input PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyDataInput!
  }

  input PostUpdateWithoutAuthorDataInput {
    body: String
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutAuthorDataInput!
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutAuthorDataInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    body: String
    body_not: String
    body_in: [String!]
    body_not_in: [String!]
    body_lt: String
    body_lte: String
    body_gt: String
    body_gte: String
    body_contains: String
    body_not_contains: String
    body_starts_with: String
    body_not_starts_with: String
    body_ends_with: String
    body_not_ends_with: String
    author: UserWhereInput
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
  }

  input PostWhereUniqueInput {
    id: ID
  }

  type Query {
    post(where: PostWhereUniqueInput!): Post
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post]!
    postsConnection(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PostConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    usersConnection(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    node(id: ID!): Node
  }

  type Subscription {
    post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post!]
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  input UserCreateInput {
    id: ID
    firstName: String!
    lastName: String!
    posts: PostCreateManyWithoutAuthorInput
  }

  input UserCreateOneWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserCreateWithoutPostsInput {
    id: ID
    firstName: String!
    lastName: String!
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    firstName_ASC
    firstName_DESC
    lastName_ASC
    lastName_DESC
  }

  type UserPreviousValues {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }

  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateManyMutationInput {
    firstName: String
    lastName: String
  }

  input UserUpdateOneRequiredWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    update: UserUpdateWithoutPostsDataInput
    upsert: UserUpsertWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateWithoutPostsDataInput {
    firstName: String
    lastName: String
  }

  input UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsDataInput!
    create: UserCreateWithoutPostsInput!
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    firstName: String
    firstName_not: String
    firstName_in: [String!]
    firstName_not_in: [String!]
    firstName_lt: String
    firstName_lte: String
    firstName_gt: String
    firstName_gte: String
    firstName_contains: String
    firstName_not_contains: String
    firstName_starts_with: String
    firstName_not_starts_with: String
    firstName_ends_with: String
    firstName_not_ends_with: String
    lastName: String
    lastName_not: String
    lastName_in: [String!]
    lastName_not_in: [String!]
    lastName_lt: String
    lastName_lte: String
    lastName_gt: String
    lastName_gte: String
    lastName_contains: String
    lastName_not_contains: String
    lastName_starts_with: String
    lastName_not_starts_with: String
    lastName_ends_with: String
    lastName_not_ends_with: String
    posts_every: PostWhereInput
    posts_some: PostWhereInput
    posts_none: PostWhereInput
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserWhereUniqueInput {
    id: ID
  }
`
