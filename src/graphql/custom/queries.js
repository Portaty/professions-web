export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        email
        gender
        createdAt
      }
      nextToken
    }
  }
`;

export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        status
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

export const listBusinessbyUserID = /* GraphQL */ `
  query ListBusinessbyUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessbyUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        status
        identityID
        name
        image
        images
        thumbnail
        email
        phone
        whatsapp
        instagram
        facebook
        page
        activity
        tags
        description
        prefer
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

export const listNotificationHistories = /* GraphQL */ `
  query ListNotificationHistories(
    $filter: ModelNotificationHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;