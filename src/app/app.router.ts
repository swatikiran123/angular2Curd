import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [
      RouterModule.forRoot(
        [
          {
            path: '',
            component: UserListComponent
          },
        ],
        { useHash: false }
      )
    ],
    exports: [RouterModule]
  })
  export class AppRouterModule {}