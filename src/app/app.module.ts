import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// pages & components

import { ComponentsModule } from './components/components.module';
import { HomePageModule } from './pages/home/home.module';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HomePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFullScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
