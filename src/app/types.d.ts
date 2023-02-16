interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  amount?: number | undefined;
}
interface Styles {
  height?: string;
  padding?: string;
  margin?: string;
  marginLeft?: string;
  fontSize?: string;
  fontWeight?: string;
}