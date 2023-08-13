import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getOne(_id: string): string {
    return `This is the productId: ${_id}`;
  }
}
