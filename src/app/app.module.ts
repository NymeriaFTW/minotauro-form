import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisaoNorteComponent } from './components/visao-norte/visao-norte.component';
import { VisaoLesteComponent } from './components/visao-leste/visao-leste.component';
import { VisaoOesteComponent } from './components/visao-oeste/visao-oeste.component';
import { VisaoSulComponent } from './components/visao-sul/visao-sul.component';

@NgModule({
  declarations: [AppComponent, VisaoNorteComponent, VisaoLesteComponent, VisaoOesteComponent, VisaoSulComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
