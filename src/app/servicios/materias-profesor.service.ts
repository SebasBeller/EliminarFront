import { Injectable ,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{MateriaAsignadaDocente} from '../interfaces/materia-asignada-docente';
import {Estudiante} from '../interfaces/estudiante'
import {AuthService} from "../servicios/auth.service"

@Injectable({
  providedIn: 'root'
})
export class MateriasProfesorService {

  auth:any=inject(AuthService);
  urlApi:string='https://academicoapi.onrender.com/materia-asignada-profesor'
  constructor(private readonly http: HttpClient) {

  }
  materias: MateriaAsignadaDocente[] = [];
obtenerMaterias():Observable<MateriaAsignadaDocente[]>{
  return this.http.get<MateriaAsignadaDocente[]>(`${this.urlApi}/todas-las-materias`)

}
obtenerMateriasDeEstudiante(id:number):Observable<MateriaAsignadaDocente[]>{
  return this.http.get<MateriaAsignadaDocente[]>(`${this.urlApi}/todas-las-materias/${id}`)

}


obtenerMateriaAsignada(id:number):Observable<MateriaAsignadaDocente>{
  return this.http.get<MateriaAsignadaDocente>(`${this.urlApi}/${id}`)
}


obtenerEstudiantesMateriaAsignada(id:number):Observable<Estudiante[]>{
  let headers=this.auth.getHeadersForAuth();
  return this.http.get<Estudiante[]>(`${this.urlApi}/estudiantes/${id}`,{headers})
}

agregarMateriaAsignada(materiaAsignada:MateriaAsignadaDocente):Observable<MateriaAsignadaDocente>{
  return this.http.post<MateriaAsignadaDocente>(`${this.urlApi}`,materiaAsignada)
}

eliminarMateriaAsignada(id_dicta:number):any{
  return this.http.delete<any>(`${this.urlApi}/${id_dicta}`)
}

}
