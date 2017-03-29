import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {TemplateLoginFormComponent} from "./template-login-form/template-login-form.component";
import {ReactiveLoginFormComponent} from "./reactive-login-form/reactive-login-form.component";

const appRoutes: Routes = [
  { path: 'template-login', component: TemplateLoginFormComponent },
  { path: 'reactive-login', component: ReactiveLoginFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateLoginFormComponent,
    ReactiveLoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
