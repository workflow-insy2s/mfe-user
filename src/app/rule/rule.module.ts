import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AddRuleComponent } from './addRule/add-rule.component';
import { ListRuleComponent } from './list-rule/list-rule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RuleRoutingModule } from './rule-routing.module';
import { ServiceService } from './service.service';




@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    AddRuleComponent,
    ListRuleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,  
    HttpClientModule, 
    ReactiveFormsModule,
    RuleRoutingModule,

  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    AddRuleComponent,
    ListRuleComponent
  ],
  providers:[ServiceService]
})
export class RuleModule { }
