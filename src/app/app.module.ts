import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './public/pages/home/home.module';
import { ContactModule } from './public/pages/contact/contact.module';
import { AdminModule } from './admin/pages/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
