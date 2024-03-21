import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { ServiceService } from '../service.service';
import { RuleDto } from '../models/rule-dto';
import { ParamDto } from '../models/param-dto';
import { ObjectDto } from '../models/object-dto';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.css'],
  //standalone: true,
  //imports: [FormsModule, CommonModule, NgClass, NgFor]
})
export class AddRuleComponent implements OnInit {
  

  // constructor( private srvParam: ParamService ,private srvRule: RuleService,private router: Router,){}
  constructor(private srvRule: ServiceService,private router: Router,){}
     IdObje : any = 0;
   selectedObjectType: string = ''; 

  
  showAddFormulaButton: boolean = false;
  showFormulaInputs: boolean = false;
  showObjectInputs: boolean =false;
  //objects: { name: string, order: string }[] = [];
  selectedItem = '2';
  Rule : RuleDto=new RuleDto()
  
  ParamDto: ParamDto = new ParamDto(this.IdObje);

  //ParamDto: ParamDto =new ParamDto();
  

  
  
  // Autres propriétés...

 



    
  ngOnInit(): void {
console.log('succes')
  }

  ObjectDto: ObjectDto = new ObjectDto(this.selectedObjectType);
  
  addRule(): void{
    // console.log(this.Rule);
    // this.srvRule.addRule(this.Rule)
    //   .subscribe(
    //     (result) => { // success
    //       console.log(result);

    //       this.router.navigate(['/mfe-rule/orderComponent/listRuleComponent']);
    //       Swal.fire('Valider', '', 'success');  
    //     },
    //     (_err) => {
    //       // traitement du cas d'erreur
    //      console.log('err');
    //       Swal.fire('Invalid ', '', 'error');
    //     }
      
    //     ); 
    this.router.navigate(['/mfe-rule/ruleComponent/listRuleComponent']);


  }

  

  onObjectTypeChange(event: Event) {
    this.selectedObjectType = (event.target as HTMLSelectElement).value;
    console.log(this.selectedObjectType)
  }
  

  onAddFormulaClick( ): void {

    this.showFormulaInputs = true;
  }




  AddObjectClick(): void{
    console.log(this.ObjectDto);
    this.srvRule.addObjet(this.ObjectDto)
      .subscribe(
        (result) => { // success
          console.log(result);

          
          Swal.fire('Valider', '', 'success');  
          console.log('data saved');
          window.location.reload();
        },
        (_err) => {
          // traitement du cas d'erreur
         console.log('err');
          Swal.fire('Invalid ', '', 'error');
        }
      
        ); 


  }

  AddObjet(): void{
    
    console.log(this.ObjectDto);
    //Ajouter un Objet 
    this.srvRule.addObjet(this.ObjectDto)
      .subscribe(
        (result) => { // success
          console.log(result);
           this.IdObje = result
           

          
          Swal.fire('Valider', '', 'success');  
          console.log('data saved');
         // window.location.reload();
        },
        (_err) => {
          // traitement du cas d'erreur
         console.log('err');
          Swal.fire('Invalid ', '', 'error');
        }
      
        ); 


  }
  AddParam(): void{
    
    console.log(this.ObjectDto);
    //Ajouter un Param 
    this.srvRule.addParam(this.ParamDto)
      .subscribe(
        (result) => { // success
          console.log(result);
           

          
          Swal.fire('Valider', '', 'success');  
          console.log('data saved');
         // window.location.reload();
        },
        (_err) => {
          // traitement du cas d'erreur
         console.log('err');
          Swal.fire('Invalid ', '', 'error');
        }
      
        ); 


  }


}