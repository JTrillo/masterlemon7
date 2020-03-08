import { Injectable } from '@angular/core';
import { SellerCategory } from "../models/seller-category.model";

const sellerCategories: SellerCategory[] = [
  {
    id: 1,
    name: 'National',
    taxes: [
      {
        id: 1,
        name: 'I.V.A.',
        amount: 0.21,
      },
      {
        id: 3,
        name: 'exempt',
        amount: 0,
      }
    ],
  },
  {
    id: 2,
    name: 'European',
    taxes: [
      {
        id: 2,
        name: 'european external tariff',
        amount: 0.17,
      },
      {
        id: 3,
        name: 'exempt',
        amount: 0,
      }
    ]
  },
  {
    id: 3,
    name: 'Foreign',
    taxes: [
      {
        id: 4,
        name: 'foreign external tariff',
        amount: 0.47,
      },
      {
        id: 5,
        name: 'special tariff',
        amount: 0.26,
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class SellerCategoryService {
  getSellerCategories(): SellerCategory[] {
    return sellerCategories;
  }
}
