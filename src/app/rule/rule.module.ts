import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RuleRoutingModule } from './rule-routing.module';
import { ServiceService } from './service.service';
import { EditObjetComponent } from './edit-objet/edit-objet.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditParameterComponent } from './edit-parameter/edit-parameter.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleUserComponent } from './role-user/role-user.component';




@NgModule({
  declarations: [
    EditObjetComponent,
    EditParameterComponent,
    AddUserComponent,
    UserListComponent,
    AddRoleComponent,
    RoleListComponent,
    RoleUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,  
    HttpClientModule, 
    ReactiveFormsModule,
    RuleRoutingModule,
    MatDialogModule,
    MatDialogModule,


  ],
  exports:[
    
  ],
  providers:[ServiceService]
})
export class RuleModule { }
