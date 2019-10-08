import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseNewComponent } from './warehouse-new/warehouse-new.component';
import { WarehouseUpdateComponent } from './warehouse-update/warehouse-update.component';
import { WarehouseShowComponent } from './warehouse-show/warehouse-show.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderShowComponent } from './provider-show/provider-show.component';
import { ProviderNewComponent } from './provider-new/provider-new.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: 'menu', component: HomepageComponent },
{ path: 'warehouses_list', component: WarehouseListComponent },
{ path: 'show/:id', component: WarehouseShowComponent },
{ path: 'edit/:id', component: WarehouseUpdateComponent },
{ path: 'add', component: WarehouseNewComponent },

{ path: 'products_list', component: ProductListComponent },
{ path: 'showp/:id', component: ProductShowComponent },
{ path: 'editp/:id', component: ProductUpdateComponent },
{ path: 'addp', component: ProductNewComponent },

{ path: 'providers_list', component: ProviderListComponent },
{ path: 'showm/:id', component: ProviderShowComponent },
{ path: 'editm/:id', component: ProviderUpdateComponent },
{ path: 'addm', component: ProviderNewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
