import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
// import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'video', component: VideoComponent },
  { path: 'sign', component: SignupComponent },
  { path: 'test', component: TestComponent },
  { path: 'result', component: ResultComponent },
  { path: 'dashboard', canActivate:[AuthGuard], component: EmployeeDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
