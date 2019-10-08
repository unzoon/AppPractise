import { Component, OnInit,Input} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

@Input() product: Product;

constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }

ngOnInit() {
		this.getProduct();
	}

	getProduct(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.productService.getProduct(id).subscribe(product => this.product = product);
	}

	save(): void {
		this.productService.updateProduct(this.product).subscribe(success=> {this.goBack();});
	}

	goBack(): void {
		this.location.back();

}
}



