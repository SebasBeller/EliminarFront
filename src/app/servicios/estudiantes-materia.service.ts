import { Injectable ,inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { EstudiantesMateria } from '../interfaces/Lista-estudiantes-materia';
import {AuthService} from "../servicios/auth.service"


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  urlApi:string = 'http://localhost:3000/estudiante';


  constructor(private http: HttpClient) { }

  auth:any=inject(AuthService);
  
  obtenerEstudiantes(): Observable<EstudiantesMateria[]> {
    let headers=this.auth.getHeadersForAuth();
    return this.http.get<any[]>(this.urlApi,{headers}).pipe(
      map(estudiantes => estudiantes.map(estudiante => ({
        id_estudiante: estudiante.id_estudiante,
        nombre: estudiante.nombre
      })))
    );
  }
}
