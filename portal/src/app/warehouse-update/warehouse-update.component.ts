import { Component, OnInit,Input} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';
@Component({
  selector: 'app-warehouse-update',
  templateUrl: './warehouse-update.component.html',
  styleUrls: ['./warehouse-update.component.scss']
})
export class WarehouseUpdateComponent implements OnInit {

@Input() warehouse: Warehouse;

constructor(private route: ActivatedRoute, private warehouseService: WarehouseService, private location: Location) { }

	ngOnInit() {
		this.getWarehouse();
	}

	getWarehouse(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.warehouseService.getWarehouse(id).subscribe(warehouse => this.warehouse = warehouse);
	}

	save(): void {
		this.warehouseService.updateWarehouse(this.warehouse).subscribe(success=> {this.goBack();});
	}

	goBack(): void {
		this.location.back();

}
}
