import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';
@Component({
  selector: 'app-warehouse-show',
  templateUrl: './warehouse-show.component.html',
  styleUrls: ['./warehouse-show.component.scss']
})
export class WarehouseShowComponent implements OnInit {

warehouse: Warehouse;

constructor(private route: ActivatedRoute, private warehouseService: WarehouseService, private location: Location) { }

	ngOnInit() {
		this.getWarehouse();
	}

	getWarehouse(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.warehouseService.getWarehouse(id).subscribe(warehouse => this.warehouse = warehouse);
	}

	goBack(): void {
		this.location.back();
	}


}
