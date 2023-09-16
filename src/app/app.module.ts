import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KidsComponent } from './kids/kids.component';
import { GeneralComponent } from './general/general.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './common/directives/highlight.directive';
import { IfNotDirective } from './common/directives/if-not.directive';
import { FinalPricePipe } from './final-price.pipe';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './Store/cart.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    KitchenComponent,
    KidsComponent,
    GeneralComponent,
    HeaderComponent,
    HighlightDirective,
    IfNotDirective,
    FinalPricePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    LoginModule,
    StoreModule.forRoot({cart: cartReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
