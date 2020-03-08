import { Component, OnInit } from '@angular/core';
import { SellerCategoryService } from '../services/seller-category.service';
import { SellerCategory } from '../models/seller-category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tax } from '../models/tax.model';

interface Lookup {
  id: number;
  name: string;
}

interface TaxByCategory {
  categoryId: number;
  taxes: Tax[];
}

const nameValid = (control: FormControl): { [key: string]: any} => {
  const firstLetter = control.value.toString()[0];
  return (!!firstLetter && (firstLetter !== firstLetter.toUpperCase())) ?
    { 'nameValid' : 'invalid name' } : null;
}

const wordsValid = (control: FormControl): { [key: string]: any} => {
  return (control.value.toString().search(/jaja/i) !== -1 ||
          control.value.toString().search(/boo/i) !== -1 ||
          control.value.toString().search(/foo/i) !== -1) ?
          { 'wordsValid': 'invalid words used'} : null;
}

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class CreateSellerComponent implements OnInit {
  categoryLookupCollection: Array<Lookup>;
  taxByCategoryCollection: Array<TaxByCategory>;
  taxLookupCollection: Array<Lookup>;
  newSellerForm: FormGroup;
  category: FormControl;
  tax: FormControl;
  name: FormControl;
  remarks: FormControl;

  constructor(private sellerCategoryService: SellerCategoryService) { }

  saveSeller(formValues) {
    console.log(formValues);
  }

  onChangeCategory(value: string) {
    if(value){
      const { taxes } = this.taxByCategoryCollection.find((c) => c.categoryId === +value);
      this.taxLookupCollection = taxes.map((t) => ({ id: t.id, name: t.name }));
      this.tax.enable();
    }else{
      this.tax.disable();
    }
    this.tax.setValue('');
  }

  ngOnInit() {
    this.initializeForm();
    const categories: SellerCategory[] = this.sellerCategoryService.getSellerCategories();
    this.populateCategoryLookupCollection(categories);
    this.populateTaxByCategoryCollection(categories);
  }

  private initializeForm(){
    this.category = new FormControl('', Validators.required);
    this.tax = new FormControl('', Validators.required);
    this.name = new FormControl('', [Validators.required, nameValid]);
    this.remarks = new FormControl('', [Validators.required, wordsValid]);
    this.newSellerForm = new FormGroup({
      category: this.category,
      tax: this.tax,
      name: this.name,
      remarks: this.remarks,
    });
    this.tax.disable();
  }

  private populateCategoryLookupCollection(categories: SellerCategory[]) {
    this.categoryLookupCollection = categories.map<Lookup>((c) => ({
      id: c.id,
      name: c.name,
    }));
  }
  
  private populateTaxByCategoryCollection(categories: SellerCategory[]) {
    this.taxByCategoryCollection = categories.map<TaxByCategory>((c) => ({
      categoryId: c.id,
      taxes: [...c.taxes],
    }));
  }
}
