import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainSeptorInterceptor } from './web-service/interceptors/main-septor.interceptor';
import { AuthModule } from './modules/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MainSeptorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
