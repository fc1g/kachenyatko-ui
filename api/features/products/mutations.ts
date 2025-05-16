import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
      createdAt
      updatedAt
      # name
      # slug
      # sku
      # colors
      # shortDescription
      # fullDescription
      # price
      # discount
      # stock
      # totalSold
      images {
        id
        createdAt
        updatedAt
        # url
        # altText
        # position
      }
      details {
        id
        createdAt
        updatedAt
        # key
        # value
      }
      specification {
        id
        createdAt
        updatedAt
        # size
        # ageGroup
        # material
        # packageSize
      }
    }
  }
`;
