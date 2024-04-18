import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-role-user',
  templateUrl: './role-user.component.html',
  styleUrls: ['./role-user.component.css']
})
export class RoleUserComponent {
   // Copie de sauvegarde de parametre original
 newUser: any;
 constructor(
   private srvRole: ServiceService,
   public dialogRef: MatDialogRef<RoleUserComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {
         // Copie de l'objet d'origine pour les modifications
         this.newUser = { ...data.user };
   }



   onCancelClick(): void {
     // Fermer la boîte de dialogue sans appliquer de modifications
     this.dialogRef.close();
   }
 
   





}
