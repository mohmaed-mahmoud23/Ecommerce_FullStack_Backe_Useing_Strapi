export  interface Iprop {
  id: number;
  title: string;
  desecription: string;
  price: number;
  stoke: number;
  user?: string; // optional
  imageUrl: string;
  quantity: number;
  category?: {
    title: string;
  };
  thumbnail: string;
  url: string;
}
