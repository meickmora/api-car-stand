import { CategoryModel } from '../model/CategoryModel';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategorieRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: CategoryModel[];

  constructor() {
    this.categories = [];
  }

  public create({ name, description }: ICreateCategoryDTO): void {
    const categoryModel = new CategoryModel();

    Object.assign(categoryModel, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(categoryModel);
  }

  public list(): CategoryModel[] {
    return this.categories;
  }

  public findByName(name: string): CategoryModel {
    const categoryName = this.categories.find(
      (category) => category.name === name
    );

    return categoryName;
  }
}
