import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'DAM',
        loadChildren: () => import('../DAM/DAM.module').then(m => m.DAMPageModule)
      },
      {
        path: 'dam2',
        loadChildren: () => import('../dam2/dam2.module').then( m => m.DAM2PageModule)
      },
      {
        path: 'fct',
        loadChildren: () => import('../fct/fct.module').then( m => m.FCTPageModule)
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
