import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactComponent } from './form-react.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormReactComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormReactComponent,    
  ]
})
export class FormModulModule { }



