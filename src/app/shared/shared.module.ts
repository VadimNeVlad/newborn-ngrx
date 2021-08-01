import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';

@NgModule({
  declarations: [AuthHeaderComponent, InputComponent, SidebarHeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [AuthHeaderComponent, InputComponent, SidebarHeaderComponent],
})
export class SharedModule {}
