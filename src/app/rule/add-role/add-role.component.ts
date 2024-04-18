import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {



  constructor(private srvRole: ServiceService,private router: Router){}

  ngOnInit(): void {
    console.log('succes')

  }

role:Role = new Role('','','','');

  addRole() {
    // console.log(this.workflow);
    this.srvRole.addRole(this.role)
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
  



}
