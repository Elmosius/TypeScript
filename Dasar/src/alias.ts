export type Id = number | string;

export type Category = {
  id: Id;
  name: string;
  //   coba optional property
  description?: string;
};

export type Product = {
  id: Id;
  name: string;
  price: number;
  category: Category;
  //   coba optional property
  description?: string;
};
