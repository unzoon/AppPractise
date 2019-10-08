import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-new',
  templateUrl: './warehouse-new.component.html',
  styleUrls: ['./warehouse-new.component.scss']
})
export class WarehouseNewComponent implements OnInit {

@Input() warehouse: Warehouse = { id: 0, address: '', pickup: '', phone: null};

constructor(private warehouseService: WarehouseService, private location: Location) { }

	ngOnInit() {
	}

	save(): void {
		this.warehouseService.addWarehouse(this.warehouse).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
  }

}
