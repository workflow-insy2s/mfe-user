import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-parameter',
  templateUrl: './edit-parameter.component.html',
  styleUrls: ['./edit-parameter.component.css']
})
export class EditParameterComponent {
    // Copie de sauvegarde de parametre original
    newRole: any;
  constructor(
    private srvRule: ServiceService,
    public dialogRef: MatDialogRef<EditParameterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
          // Copie de l'objet d'origine pour les modifications
          this.newRole = { ...data.role };
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
    text: 'Cette action est irréversible et Modifier le role.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, Modifier!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
          // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
       this.data.role.name = this.newRole.name;
       this.data.role.description = this.newRole.description;
      // L'utilisateur a cliqué sur "Oui, supprimer"
      this.srvRule.editRole(this.data.role,this.data.role.id)
        .subscribe(
          (result) => { // succès
            console.log(result);
            Swal.fire(' Role est modifier avec succès', '', 'success');
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
