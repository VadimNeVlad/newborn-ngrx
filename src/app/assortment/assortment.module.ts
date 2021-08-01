import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssortmentRoutingModule } from './assortment-routing.module';
import { AssortmentComponent } from './assortment.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AssortmentComponent],
  imports: [CommonModule, AssortmentRoutingModule, SharedModule],
})
export class AssortmentModule {}
