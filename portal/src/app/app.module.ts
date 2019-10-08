import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    WarehouseListComponent,
    WarehouseNewComponent,
    WarehouseUpdateComponent,
    WarehouseShowComponent,
    ProductListComponent,
    ProductShowComponent,
    ProductNewComponent,
    ProductUpdateComponent,
    ProviderListComponent,
    ProviderShowComponent,
    ProviderNewComponent,
    ProviderUpdateComponent,
    HomepageComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
