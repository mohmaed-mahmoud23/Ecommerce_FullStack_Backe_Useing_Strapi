export interface Iprop {
  id: number;
  title: string;
  desecription: string;
  price: number;
  stoke: number;

  category: {
    title: string;
  };

  thumbnail: {
    id: number;
    url: string;
  };
}
