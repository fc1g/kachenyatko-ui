// TODO: complete Product type with all fields
export type Product = {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  price: number;
  discount: number | null;
  totalPrice: number;
};
