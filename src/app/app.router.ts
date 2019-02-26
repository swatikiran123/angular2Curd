import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppComponentModule } from './app.component';

@NgModule({
    imports: [
      RouterModule.forRoot(
        [
          {
            path: '',
            component: AppComponentModule
          },
        ],
        { useHash: false }
      )
    ],
    exports: [RouterModule]
  })
  export class AppRouterModule {}