import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './paginas/material/material.component';
import { AgregarNuevoContenidoComponent } from './paginas/agregar-nuevo-contenido/agregar-nuevo-contenido.component';
import { BuscarMateriaComponent } from './paginas/buscar-materia/buscar-materia.component';
import { MostrarMateriaComponent } from './paginas/mostrar-materia/mostrar-materia.component';
import { DetalleMateriaComponent } from './paginas/detalle-materia/detalle-materia.component';
import { VerMateriasDocenteComponent } from './paginas/ver-materias-docente/ver-materias-docente.component';
import { VerMaterialesEstudianteComponent } from './paginas/ver-materia-estudiante/home/feature/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HistorialAsistenciaComponent } from './paginas/historial-asistencia/historial-asistencia.component';
import { ListaEstudiantesProfesorComponent } from './paginas/lista-estudiantes-profesor/lista-estudiantes-profesor.component';
import { RegistroAsistenciaDocentesComponent } from './paginas/registro-asistencia-docentes/registro-asistencia-docentes.component';
import { VerAsistenciaPorMateriaComponent } from './paginas/ver-asistencia-por-materia/ver-asistencia-por-materia.component';
import { AuthGuard } from './guards/auth.guard'; // Importa el AuthGuard
import{LoginComponent} from './paginas/login/login.component'


export const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }
  ,
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'ver-material/:id',
        component: MaterialComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'mostrar-materia',
        component: MostrarMateriaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'Buscar-Materia',
        component: BuscarMateriaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'ver-materiales-estudiante/:id',
        component: VerMaterialesEstudianteComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'historial-asistencia',
        component: HistorialAsistenciaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'ver-asistencia-materia/:materia/:professor/:materiaNombre',
        component: VerAsistenciaPorMateriaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'detalle-materia/:id_dicta',
        component: DetalleMateriaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['estudiante'] },
      },
      {
        path: 'agregar-nuevo-contenido/:id_dicta',
        component: AgregarNuevoContenidoComponent,
        title: 'Agregar Nuevo Contenido',
        canActivate: [AuthGuard],
        data: { roles: ['profesor'] },
      },
      {
        path: 'ver-materias-docente',
        component: VerMateriasDocenteComponent,
        canActivate: [AuthGuard],
        data: { roles: ['profesor'] },
      },
      {
        path: 'lista-estudiantes-profesor/:id_dicta',
        component: ListaEstudiantesProfesorComponent,
        canActivate: [AuthGuard],
        data: { roles: ['profesor'] },
      },

      {
        path: 'registro-asistencias-estudiantes/:idMateria',
        component: RegistroAsistenciaDocentesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['profesor'] },
      },
      {
        path: 'agregar-material-docente/:id',
        canActivate: [AuthGuard],
        data: { roles: ['profesor'] },
        loadChildren: () =>
          import(
            './paginas/agregar-material-docente/home/feature/home-routing'
          ),
      }
    ],
  },
];
