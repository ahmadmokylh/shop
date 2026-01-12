export interface ProductType {
  _id?: string;
  slug?: string;
  img: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
}
