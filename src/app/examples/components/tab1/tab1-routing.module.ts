import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserComponent } from '../configurations/components/user/user.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
