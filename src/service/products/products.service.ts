import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product/product.entity';

@Injectable()
export class ProductsService {
  private productList = [
    {
      id: '01',
      name: 'OMEN 16',
      description: 'Ryzen 9, 32GB RAM, 1TB SSD',
      price: 1299000,
      stock: 43,
    },
    {
      id: '02',
      name: 'LENOVO THINKPAD X1 EXTRA CARBON',
      description: 'Core I7, 16GB RAM, 512GB SSD',
      price: 1045000,
      stock: 22,
    },
  ];

  createOne(payload: Product): string {
    const newProduct = {
      id: payload.id,
      name: payload.name,
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
    };

    this.productList.push(newProduct);

    return `The product id:${payload.id} has been created`;
  }

  getAll(): Product[] {
    return this.productList;
  }
  getOne(_id: string): Product[] {
    const findOne = this.productList.filter((item) => item.id == _id);
    return findOne;
  }

  updateOne(_id: string, payload: any): string {
    let productFound;
    const _index = this.productList.findIndex((item) => item.id == _id);
    if (_index < 0) {
      throw new NotFoundException(`The product id:${_id} not found`);
    } else {
      productFound = this.productList[_index];
      Object.assign(productFound, payload);
      this.productList[_index] = productFound;
      return `The product id:${_id} has been updated`;
    }
  }
}
