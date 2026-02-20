import { Component } from '@angular/core';
import { Formulario } from './components/formulario/formulario';
import { Tabla } from './components/tabla/tabla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Formulario, Tabla],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
