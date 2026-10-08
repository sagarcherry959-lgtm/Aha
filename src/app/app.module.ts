import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestrelesesComponent } from './latestreleses/latestreleses.component';
import { MollywoodmoodsComponent } from './mollywoodmoods/mollywoodmoods.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';
import { WatchforfreeComponent } from './watchforfree/watchforfree.component';
import { WatchbylanguageComponent } from './watchbylanguage/watchbylanguage.component';
import { WatchinteluguandtamilComponent } from './watchinteluguandtamil/watchinteluguandtamil.component';
import { TrendingnowComponent } from './trendingnow/trendingnow.component';
import { InthespotlightComponent } from './inthespotlight/inthespotlight.component';
import { TamiltimelessclassicsComponent } from './tamiltimelessclassics/tamiltimelessclassics.component';
import { TelugutimelessclassicsComponent } from './telugutimelessclassics/telugutimelessclassics.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { HandpickedforyouComponent } from './handpickedforyou/handpickedforyou.component';
import { Watchin4kComponent } from './watchin4k/watchin4k.component';
import { FamilyentertainersComponent } from './familyentertainers/familyentertainers.component';
import { MostwatchedinteluguComponent } from './mostwatchedintelugu/mostwatchedintelugu.component';
import { MostwatchedintamilComponent } from './mostwatchedintamil/mostwatchedintamil.component';
import { LovedairiesComponent } from './lovedairies/lovedairies.component';
import { LaughterloadedComponent } from './laughterloaded/laughterloaded.component';
import { KillertwistsComponent } from './killertwists/killertwists.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestrelesesComponent,
    MollywoodmoodsComponent,
    AhaoriginalsComponent,
    WatchforfreeComponent,
    WatchbylanguageComponent,
    WatchinteluguandtamilComponent,
    TrendingnowComponent,
    InthespotlightComponent,
    TamiltimelessclassicsComponent,
    TelugutimelessclassicsComponent,
    NavbarComponent,
    FooterComponent,
    HandpickedforyouComponent,
    Watchin4kComponent,
    FamilyentertainersComponent,
    MostwatchedinteluguComponent,
    MostwatchedintamilComponent,
    LovedairiesComponent,
    LaughterloadedComponent,
    KillertwistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
