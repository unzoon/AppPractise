import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
selector: 'app-product-new',
templateUrl: './product-new.component.html',
styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

@Input() product: Product = { id: 0, name: '', price: null, w_id: null,p_id: null};

constructor(private productService: ProductService, private location: Location) { }

	ngOnInit() {
	}

	save(): void {
		this.productService.addProduct(this.product).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
  }

}


