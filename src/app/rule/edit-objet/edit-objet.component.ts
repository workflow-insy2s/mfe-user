import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ObjectDto } from '../models/object-dto';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-objet',
  templateUrl: './edit-objet.component.html',
  styleUrls: ['./edit-objet.component.css']
})
export class EditObjetComponent {
  // Copie de sauvegarde de l'objet original
  newObjet: any;

  constructor(
    private srvRule: ServiceService,
    public dialogRef: MatDialogRef<EditObjetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { objet: any }
  ) {
    // Copie de l'objet d'origine pour les modifications
    this.newObjet = { ...data.objet };
  }

  onCancelClick(): void {
    // Fermer la boîte de dialogue sans appliquer de modifications
    this.dialogRef.close();
  }
 //*******************************************************Edit Object*************************************************** */

  onSaveClick(): void {


    // Afficher un message d'alerte de confirmation avant la suppression
   Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible et Modifier l Objet.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, Modifier!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
          // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
       this.data.objet.name = this.newObjet.name;
       this.data.objet.content = this.newObjet.content;
      // L'utilisateur a cliqué sur "Oui, supprimer"
      this.srvRule.editObject(this.data.objet,this.data.objet.id)
        .subscribe(
          (result) => { // succès
            console.log(result);
            Swal.fire('l objet est modifier avec succès', '', 'success');
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

 //********************************************************End Object*************************************************** */





    
  }




}
