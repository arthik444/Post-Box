import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [

  {
    path:'tabs',
    component:HomePage,
    children:[

      {
      path:'account',
      children:[
        {
          path:'',
          loadChildren:()=>import('./account/account.module').then(m=>m.AccountPageModule)
        }
      ]
      },
      {
        path:'billing',
        children:[
          {
            path:'',
            loadChildren:()=>import('./billing/billing.module').then(m=>m.BillingPageModule)
          }
        ]
      },
      {
        path:'tasks',
        children:[
          {
            path:'',
            loadChildren:()=>import('./tasks/tasks.module').then(m=>m.TasksPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'home/tabs/account',
        pathMatch:'full'
      }
      ]
  },
  {
    path:'',
    redirectTo:'home/tabs/account',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
