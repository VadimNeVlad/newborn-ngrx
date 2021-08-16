import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AuthHeaderComponent,
    InputComponent,
    SidebarHeaderComponent,
    LoaderComponent,
    ModalComponent,
    BarChartComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ChartsModule],
  exports: [
    AuthHeaderComponent,
    InputComponent,
    SidebarHeaderComponent,
    LoaderComponent,
    ModalComponent,
    BarChartComponent,
  ],
})
export class SharedModule {}
