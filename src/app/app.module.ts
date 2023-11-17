import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagegameComponent } from './pagegame/pagegame.component';
import { AsideAndSeccionComponent } from './aside-and-seccion/aside-and-seccion.component';

const routes: Routes = [
  {path: 'nav', component: NavFooterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PagegameComponent},
  {path: 'aside-and-seccion', component: AsideAndSeccionComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    NavFooterComponent,
    LoginComponent,
    PagegameComponent,
    AsideAndSeccionComponent
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
