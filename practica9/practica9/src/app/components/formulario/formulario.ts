import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  constructor(private servicio: AlumnosService) {}

  guardarAlumno(form: any) {

    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera
    };

    this.servicio.agregarAlumno(nuevoAlumno).subscribe(() => {
      alert("Alumno agregado correctamente");
      form.reset();
    });

  }

}


