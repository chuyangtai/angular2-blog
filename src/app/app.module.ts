import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { VisitComponent } from './visit/visit.component';

@NgModule({
  declarations: [
    AppComponent,
    RightMenuComponent,
    VisitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
