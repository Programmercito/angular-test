import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { PostsComponent } from './shared/posts/posts.component';
import { UsersComponent } from './shared/users/users.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MenubarModule } from 'primeng/menubar';
import { RegisterComponent } from './shared/register/register.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MessagesModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    PaginatorModule

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
