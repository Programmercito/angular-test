import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { PostsComponent } from './shared/posts/posts.component';
import { UsersComponent } from './shared/users/users.component';
import { ContactComponent } from './shared/contact/contact.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './shared/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, children: [
      { path: 'register/posts', component: PostsComponent },
      { path: 'register/users', component: UsersComponent },
      { path: 'home', component: RegisterComponent },
      { path: 'register/contact', component: ContactComponent }
    ], canActivate: [authGuard]
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
