import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeSplashComponent} from './home-splash/home-splash.component';
import {FooterComponent} from './footer/footer.component';
import {GetStartedComponent} from './get-started/get-started.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeSplashComponent, FooterComponent, GetStartedComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
