import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAMPage } from './DAM.page';

const routes: Routes = [
  {
    path: '',
    component: DAMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAMPageRoutingModule {}
