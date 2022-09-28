import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  
  exports:[
    HeaderComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
