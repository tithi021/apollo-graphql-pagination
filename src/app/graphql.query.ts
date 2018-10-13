import gql from 'graphql-tag';

export const getUser = gql`
    query {
        users {
        id
        name
        }
    }
`;