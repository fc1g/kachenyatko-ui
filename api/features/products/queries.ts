import { gql } from '@apollo/client';

export const GET_BESTSELLERS = gql`
  query Bestsellers($take: Float!) {
    bestsellers(take: $take) {
      id
      name
      slug
      shortDescription
      formattedPrice
      formattedOldPrice
      stock
      images {
        id
        url
        altText
        position
      }
    }
  }
`;

export const GET_NEWEST = gql`
  query Newest($take: Float!) {
    newest(take: $take) {
      id
      name
      slug
      shortDescription
      formattedPrice
      formattedOldPrice
      stock
      images {
        id
        url
        altText
        position
      }
    }
  }
`;
