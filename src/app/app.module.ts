import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { StockComponent } from './stocks/stock/stock.component';
import { UserComponent } from './management/user/user.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { StocksComponent } from './stocks/stocks/stocks.component';

import {AuthService} from './auth/auth.service';
import { HeaderComponent } from './navigation/header/header.component'
import { StockService } from './stocks/stock.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StockComponent,
    UserComponent,
    StocksComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthService,StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
