import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private apiUrl = 'http://127.0.0.1:5000/alumnos';

  constructor(private http: HttpClient) {}

  obtenerAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarAlumno(alumno: any): Observable<any> {
    return this.http.post(this.apiUrl, alumno);
  }
}
