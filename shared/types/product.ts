interface Review {}

interface Product {
  _id: string;
  title: string;
  price: number;
  intro: string;
  countInStock: number;
  categories: string[];
  tags: string[];
  description: string;
  info: {
    weight: string;
    dimentions: string;
    colors: string;
    material: string;
  };
  reviews: Review[];
  images: string[];
}

export default Product;
