export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface IProductOptions {
  size: string;
}

export interface IProductCart extends IProduct {
  options: IProductOptions;
  quantity: number;
}
