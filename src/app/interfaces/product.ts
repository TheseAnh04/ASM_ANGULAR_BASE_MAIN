import { ICategory } from './category';

export interface IProduct {
  name: string;
  price?: number;
  description: string;
  image: string;
  categoryId: string;
  id?: string;
  category: ICategory;
}
