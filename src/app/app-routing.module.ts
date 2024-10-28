import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './view-login/view-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { authGuard } from './auth.guard'; // Importa el guard

const routes: Routes = [
  { path: 'login', component: ViewLoginComponent },
  {path: 'sidebar' , component: SidebarComponent , canActivate: [authGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
