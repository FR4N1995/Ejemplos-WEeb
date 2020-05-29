import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{HeaderComponente} from './componentes/header/header'
import{bodyComponente} from './componentes/body/body';
import { FooterComponent } from './componentes/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponente,
    bodyComponente,
    FooterComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
