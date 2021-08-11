import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrderCategoriesComponent } from './order-categories/order-categories.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from '../store/category/category.effects';
import { PositionsEffects } from '../store/position/position.effects';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { OrderEffects } from '../store/order/order.effects';

@NgModule({
  declarations: [
    OrderComponent,
    OrderCategoriesComponent,
    AddOrderComponent,
    OrderCartComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule,
    EffectsModule.forFeature([CategoryEffects, PositionsEffects, OrderEffects]),
  ],
})
export class OrderModule {}
