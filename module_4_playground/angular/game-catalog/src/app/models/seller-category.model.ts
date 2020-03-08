import { Tax } from './tax.model';

export interface SellerCategory {
  id: number;
  name: string;
  taxes: Tax[];
}