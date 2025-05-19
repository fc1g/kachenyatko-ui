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
        url
        altText
        position
      }
    }
  }
`;

export const GET_OTHER_PRODUCTS = gql`
  query OtherProducts($id: String!, $take: Float!) {
    otherProducts(id: $id, take: $take) {
      id
      name
      slug
      shortDescription
      formattedPrice
      formattedOldPrice
      stock
      images {
        url
        altText
        position
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_PRODUCT_STATIC_PARAMS = gql`
  query ProductStaticParams {
    productStaticParams {
      id
      slug
    }
  }
`;

export const GET_PRODUCT_METADATA = gql`
  query ProductMetadata($id: String!) {
    productMetadata(id: $id) {
      name
      shortDescription
      images {
        url
        altText
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query Product($id: String!) {
    product(id: $id) {
      id
      sku
      name
      colors
      formattedPrice
      formattedOldPrice
      stock
      fullDescription
      images {
        id
        url
        altText
        position
      }
      details {
        key
        value
      }
      specification {
        size
        material
        ageGroup
        packageSize
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_PRODUCT_BY_SKU = gql`
  query ProductBySku($sku: String!) {
    productBySku(sku: $sku) {
      id
      sku
      name
      colors
      formattedPrice
      formattedOldPrice
      stock
      fullDescription
      images {
        id
        url
        altText
        position
      }
      details {
        key
        value
      }
      specification {
        size
        material
        ageGroup
        packageSize
      }
      categories {
        name
        slug
      }
    }
  }
`;
