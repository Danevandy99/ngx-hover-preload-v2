import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    SharedModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
