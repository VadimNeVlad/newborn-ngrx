import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/guards/login.guard';
import { SignedInComponent } from './signed-in/signed-in.component';
import { SignedUpComponent } from './signed-up/signed-up.component';

const routes: Routes = [
  { path: '', canActivate: [LoginGuard], component: SignedInComponent },
  { path: 'signup', canActivate: [LoginGuard], component: SignedUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
