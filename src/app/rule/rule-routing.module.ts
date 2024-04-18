import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RuleComponent } from './rule.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
const ruleRoutes: Routes = [


  { path: '', redirectTo: 'homeComponent/addUserComponent', pathMatch: 'full' },

    {
        path: 'homeComponent',
        component: RuleComponent,
        children:[

          {
            path:"addrolecomponent",
            component: AddRoleComponent
          },
          {
            path:"roleListComponent",
            component: RoleListComponent
          },
          {
            path:"addUserComponent",
            component: AddUserComponent

          },
          {
            path:"userListComponent",
            component: UserListComponent
          },
          
          
        ]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ruleRoutes)
  ]
})
export class RuleRoutingModule { }
