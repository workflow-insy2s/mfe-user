import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditParameterComponent } from '../edit-parameter/edit-parameter.component';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Role } from '../models/role';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent  implements OnInit{

  constructor( private srvRole: ServiceService,private router: Router,private dialog: MatDialog) {}




/***************************methode getAllRole********************************** */
roles: Role[]=[];
ngOnInit(): void {
  console.log('succes')
  this.srvRole.getAllRoles().subscribe((res: any) => {

    console.log(res)
    this.roles = res
  
   })



}


/***************************END methode getAllRole********************************** */

/****************************Delete Role************* */


deleteRole(roleId: any) {
  // Afficher un message d'alerte de confirmation avant la suppression
  console.log(roleId)
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible et supprimera le role.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // L'utilisateur a cliqué sur "Oui, supprimer"
      this.srvRole.deleteRole(roleId)
        .subscribe(
          (result) => { // succès
            console.log(result);
            Swal.fire('Role supprimé avec succès', '', 'success');
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










  //************************************************************Edit Parametres********************************************************** */
openEditParametreDialog(role:any): void {
  const dialogRef = this.dialog.open(EditParameterComponent, {
    width: '500px', // Largeur de la boîte de dialogue
    data: { role } // Passer les données au composant edit-objet
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Boîte de dialogue fermée'); // Logique à exécuter après la fermeture de la boîte de dialogue
  });
}



//*************************************************************Fin Edit Parametres************************************************************** */


}
