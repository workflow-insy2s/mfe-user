import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-parameter',
  templateUrl: './edit-parameter.component.html',
  styleUrls: ['./edit-parameter.component.css']
})
export class EditParameterComponent {
    // Copie de sauvegarde de parametre original
    newObjet: any;
  constructor(
    public dialogRef: MatDialogRef<EditParameterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
          // Copie de l'objet d'origine pour les modifications
          this.newObjet = { ...data.objet };
    }
    onCancelClick(): void {
      // Fermer la boîte de dialogue sans appliquer de modifications
      this.dialogRef.close();
    }
  
    onSaveClick(): void {
      // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
      this.data.objet.name = this.newObjet.name;
      this.data.objet.content = this.newObjet.content;
      this.data.objet.rank = this.newObjet.rank;
      this.dialogRef.close();
    }
}
