import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditObjetComponent } from '../edit-objet/edit-objet.component'; // Importez votre composant edit-objet
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { RoleUserComponent } from '../role-user/role-user.component';
import { TokenService } from '../TokenService';
import { Role } from '../models/role';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    // constructor(private srv: RuleService , private router: Router) {}
    constructor( private srvRole: ServiceService, private router: Router,private dialog: MatDialog,private tokenService: TokenService) {}


  

/***************************methode getAllUser********************************** */
Users: User[] = [];
ngOnInit(): void {
  console.log('succes')
  this.srvRole.getAllUsers().subscribe((res: any) => {

    console.log(res)
    this.Users = res
  
   })

   const token = this.tokenService.getToken();
   console.log("this is token:",token)

}


/***************************END methode getAllUser********************************** */
/****************************Delete User************* */


deleteUser(userId: any) {
  // Afficher un message d'alerte de confirmation avant la suppression
  console.log(userId)
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible et supprimera l utilisateur.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // L'utilisateur a cliqué sur "Oui, supprimer"
      this.srvRole.deleteUser(userId)
        .subscribe(
          (result) => { // succès
            console.log(result);
            Swal.fire('Utilisateur supprimé avec succès', '', 'success');
            window.location.reload();
          },
          (err) => {
            // traitement du cas d'erreur
            console.log(err);
            Swal.fire('Erreur', '', 'error');
            window.location.reload();
          }
        );
    } else {
      // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
      Swal.fire('Suppression annulée', '', 'info');
    }
  });
}



/****************************End Delete Role************* */




















 

 //************************************************************Edit Objets********************************************************** */
openEditObjetDialog(user:any): void {
  const dialogRef = this.dialog.open(EditObjetComponent, {
    width: '500px', // Largeur de la boîte de dialogue
    data: { user } // Passer les données au composant edit-objet
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Boîte de dialogue fermée'); // Logique à exécuter après la fermeture de la boîte de dialogue
  });
}



//*************************************************************Fin Edit Objet************************************************************** */




 //************************************************************ Role********************************************************** */
 openRoleUserDialog(roles:Role[]): void {
  const dialogRef = this.dialog.open(RoleUserComponent, {
    width: '500px', // Largeur de la boîte de dialogue
    data: {  } // Passer les données au composant edit-objet
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Boîte de dialogue fermée'); // Logique à exécuter après la fermeture de la boîte de dialogue
  });
}



//*************************************************************************************************************************** */




/*************************Active User************************* */
active(userId: any) {
  // Afficher un message d'alerte de confirmation avant la suppression
  console.log(userId)
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible et activer l utilisateur.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, activer!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // L'utilisateur a cliqué sur "Oui, supprimer"
      this.srvRole.activeUser(userId)
        .subscribe(
          (result) => { // succès
            console.log(result);
            Swal.fire('Utilisateur activer avec succès', '', 'success');
            window.location.reload();
          },
          (err) => {
            // traitement du cas d'erreur
            console.log(err);
            Swal.fire('Erreur', '', 'error');
            window.location.reload();
          }
        );
    } else {
      // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
      Swal.fire('Activation annulée', '', 'info');
    }
  });
}
/************************************************************ */

}
