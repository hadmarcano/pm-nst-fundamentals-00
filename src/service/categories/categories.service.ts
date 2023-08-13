import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getOne(_id: string): string {
    return `This is the categoryId: ${_id}`;
  }
}
