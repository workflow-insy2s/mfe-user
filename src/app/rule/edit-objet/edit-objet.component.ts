import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role';

@Component({
  selector: 'app-edit-objet',
  templateUrl: './edit-objet.component.html',
  styleUrls: ['./edit-objet.component.css']
})
export class EditObjetComponent implements OnInit{


 // Copie de sauvegarde de parametre original
 newUser: any;
 roleAr:Role[]=[];
 constructor(
   private srvRole: ServiceService,
   public dialogRef: MatDialogRef<EditObjetComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {
         // Copie de l'objet d'origine pour les modifications
         this.newUser = { ...data.user };
         this.roleAr=this.newUser.roles;
   }





  roles: Role[]=[];
  ngOnInit(): void {
    console.log('les role arrives et souvgarder dans roleAr:',this.roleAr)
    this.srvRole.getAllRoles().subscribe((res: any) => {
  
      console.log(res)
      this.roles = res

            // Marquez les rôles présents dans roleAr comme sélectionnés
            this.roles.forEach(role => {
              if (this.roleAr.some(arRole => arRole.id === role.id)) {
                role.checked = true;
              }
            });
          });
    
     

     


  }



  isRoleSelected(role: Role): boolean {
    return !!this.roleAr.find(arRole => arRole.id === role.id);
  }









  selectedRoles: Role[] = [];

  handleRoleChange(event: any, role: Role) {
    role.checked = event.target.checked;
    if (event.target.checked) {
      // Si la case est cochée, ajoutez le rôle au tableau
      this.selectedRoles.push(role);
    } else {
      // Si la case est décochée, retirez le rôle du tableau
      const index = this.selectedRoles.findIndex(selectedRole => selectedRole === role);
      if (index !== -1) {
        this.selectedRoles.splice(index, 1);
      }
    }

    //console.log(this.selectedRoles)
    
  }

   onCancelClick(): void {
     // Fermer la boîte de dialogue sans appliquer de modifications
     this.dialogRef.close();
   }
 
   onSaveClick(): void {
     // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
     

   // Afficher un message d'alerte de confirmation avant la suppression
  Swal.fire({
   title: 'Êtes-vous sûr?',
   text: 'Cette action est irréversible et Modifier l utilisateur .',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonText: 'Oui, Modifier!',
   cancelButtonText: 'Annuler'
 }).then((result) => {
   if (result.isConfirmed) {
         // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
      this.data.user.username = this.newUser.username;
      this.data.user.email = this.newUser.email;
      this.data.user.firstname = this.newUser.firstname;
      this.data.user.lastname = this.newUser.lastname;
      this.data.user.password = this.newUser.password;
      this.data.user.enabled = this.newUser.enabled;
      this.data.user.status = this.newUser.status;
      this.data.user.roles = this.selectedRoles
     // L'utilisateur a cliqué sur "Oui, supprimer"
     this.srvRole.editUser(this.data.user)
       .subscribe(
         (result) => { // succès
           console.log(result);
           Swal.fire(' Utilisateur est modifier avec succès', '', 'success');
           this.dialogRef.close();
         },
         (err) => {
          console.log('Error:', err);
          Swal.fire('Erreur', '', 'error');
         }
       );
   } else {
     // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
     Swal.fire('Modification annulée', '', 'info');
     this.dialogRef.close();
   }
 });



}
}
