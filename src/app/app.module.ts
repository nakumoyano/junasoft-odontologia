import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { ServiciosComponent } from './pages/home/servicios/servicios.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubHeroComponent } from './pages/home/sub-hero/sub-hero.component';
import { DondeEstamosComponent } from './pages/donde-estamos/donde-estamos.component';
import { SacarTurnoComponent } from './pages/sacar-turno/sacar-turno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ServicesComponent,
    ServiciosComponent,
    AboutUsComponent,
    FooterComponent,
    SubHeroComponent,
    DondeEstamosComponent,
    SacarTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
