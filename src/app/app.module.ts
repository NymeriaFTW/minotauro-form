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
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [AppComponent, VisaoNorteComponent, VisaoLesteComponent, VisaoOesteComponent, VisaoSulComponent, BoardComponent],
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
