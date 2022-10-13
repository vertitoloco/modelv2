import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'DAM',
        children: [
          {
            path: '',
            loadChildren: '../DAM/DAM.module#DAMModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/DAM',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
