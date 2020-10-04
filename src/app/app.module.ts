import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './public/pages/home/home.module';
import { ContactModule } from './public/pages/contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule,
    // ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
