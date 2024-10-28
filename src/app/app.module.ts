import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; // Asegúrate de incluir esto
import { routes } from './app.routes'; 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
})
export class AppModule {}
