import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../../services/alumnos';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.html'
})

export class Tabla {

  alumnos: any[] = [];

  constructor(private servicio: AlumnosService) {}

  ngOnInit() {
    this.servicio.obtenerAlumnos().subscribe((data: any) => {
      console.log(data);
      this.alumnos = data;
    });
  }
}

