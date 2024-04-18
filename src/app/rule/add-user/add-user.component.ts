import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { Role } from '../models/role';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private srvRole: ServiceService,private router: Router){}
  roles: Role[]=[];
  ngOnInit(): void {
    console.log('succes')
    this.srvRole.getAllRoles().subscribe((res: any) => {
  
      console.log(res)
      this.roles = res
    
     })
  }






  /*******************ajouter user with role ********************* */
  // Méthode pour gérer le changement d'état des cases à cocher
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

  user:User = new User('','','','','','','','','','');

  addRole() {
    this.user.roles = this.selectedRoles
    console.log(this.user);
    this.srvRole.addUser(this.user)
      .subscribe(
        (result) => { // success
          console.log(result);

          Swal.fire('Valider', '', 'success');
          
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err);
          Swal.fire('Invalid ', '', 'error');
        }
      );
  }

  

/******************************************************************/
}
