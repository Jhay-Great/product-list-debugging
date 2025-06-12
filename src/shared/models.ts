
export interface DessertInterface {
  image: DessertImages;
  name: string;
  category: string;
  price: number;
  quantity: number;
  total: number;

};



export interface DessertImages {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
