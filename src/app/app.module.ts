import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagegameComponent } from './pagegame/pagegame.component';
import { AsideAndSeccionComponent } from './aside-and-seccion/aside-and-seccion.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { Juego1Component } from './juego1/juego1.component';
import { Juego2Component } from './juego2/juego2.component';
import { Juego3Component } from './juego3/juego3.component';
import { Juego4Component } from './juego4/juego4.component';
import { Juego5Component } from './juego5/juego5.component';
import { Juego6Component } from './juego6/juego6.component';

const routes: Routes = [
  {path: 'nav', component: NavFooterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PagegameComponent},
  {path: 'aside-and-seccion', component: AsideAndSeccionComponent},
  {path: 'sing-up', component: SingUpComponent},
  {path: 'juego1', component: Juego1Component},
  {path: 'juego2', component: Juego2Component},
  {path: 'juego3', component: Juego3Component},
  {path: 'juego4', component: Juego4Component},
  {path: 'juego5', component: Juego5Component},
  {path: 'juego6', component: Juego6Component}
]




@NgModule({
  declarations: [
    AppComponent,
    NavFooterComponent,
    LoginComponent,
    PagegameComponent,
    AsideAndSeccionComponent,
    SingUpComponent,
    Juego1Component,
    Juego2Component,
    Juego3Component,
    Juego4Component,
    Juego5Component,
    Juego6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
