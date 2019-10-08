import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

warehouses: Warehouse[] = [];

constructor(private route: ActivatedRoute, private warehouseService: WarehouseService) { }

	ngOnInit() {
		this.getWarehouses();
	}

	getWarehouses(): void {
		this.warehouseService.getWarehouses().subscribe(warehouses => this.warehouses = warehouses);
	}

	delete(warehouse: Warehouse): void {
		this.warehouseService.deleteWarehouse(warehouse).subscribe(success=> {this.getWarehouses();});
	}

}
