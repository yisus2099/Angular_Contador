import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'ejemplito', component: EjemploComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }
