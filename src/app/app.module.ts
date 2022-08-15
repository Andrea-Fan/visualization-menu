import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextMenuModule } from './context-menu/context-menu.module';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContextMenuModule,
    //InfoMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
