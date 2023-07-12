import { Component } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.scss']
})


export class FormReactComponent    {

 
  nombrecontrol = new FormControl('',[Validators.required,Validators.maxLength(20)])
  apellidocontrol = new FormControl('',[Validators.required])
  emailcontrol = new FormControl('',[Validators.required,Validators.email])
  
  ingresoform = new FormGroup({
    nombres: this.nombrecontrol,
    apellidos: this.apellidocontrol,
    email: this.emailcontrol
  })
  
   guardar(){
    console.log(this.ingresoform.value)
   } 
  }



