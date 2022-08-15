import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuDirective } from './directives/context-menu.directive';



@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContextMenuComponent,
    ContextMenuDirective
  ]
  
})
export class ContextMenuModule { }
