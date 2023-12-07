import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/model/post.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PostDeleteService } from 'src/app/core/post-delete.service';
import { PostUpdateService } from 'src/app/core/post-update.service';
import { PostCreateService } from 'src/app/core/post-create.service';
import { PaginatorState } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  filter = new FormControl('', { nonNullable: true });

  posts!: Post[];
  current!: Post;
  indice: number = 0;
  visible: boolean = false;
  operacion: string = "";
  first: number = 0;
  rows: number = 10;
  buscar:string="";

  constructor(private postservice: PostsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private poservice: PostDeleteService,
    private update: PostUpdateService,
    private create: PostCreateService) {

  }


  cancelar(cancela: Post) {
    this.visible = false;
  }

  grabar(actual: Post) {
    if (this.operacion == 'add') {
      this.create.createApiPost(actual).subscribe({
        next: (data: Post) => {
          this.create.agregarArray(data, this.posts);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Agregado' });

        },
        error: (error: any) => {
          this.messageService.add({ severity: 'error', summary: 'error', detail: 'Error al modificar ' });
        }
      });
    } else {
      this.update.modifyApiPost(actual).subscribe({
        next: (data: Post) => {
          this.update.modificaArray(data, this.posts);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Modificado' });

        },
        error: (error: any) => {
          this.messageService.add({ severity: 'error', summary: 'error', detail: 'Error al modificar ' });
        }
      });
    }
    this.visible = false;

  }

  crear() {
    this.operacion = "add";
    this.visible = true;
    this.current = { id: null, userId: null, title: "", body: "" };

  }

  edit(post: Post) {
    this.current = JSON.parse(JSON.stringify(post));
    this.visible = true;
    this.operacion = "edit";
  }


  delete(post: Post) {
    this.confirmationService.confirm({
      message: 'Eliminar el registro?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.poservice.deleteApiPost(post.id!).subscribe({
          next: (data: any) => {
            this.posts = this.poservice.delete(post, this.posts);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Eliminado' });
          },
          error: (error: any) => {
            this.messageService.add({ severity: 'error', summary: 'error', detail: 'Error al eliminar' });

          }
        });
      },
      reject: (type: any) => {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'cancelado no se elimino nada' });
      }
    });
  }


  ngOnInit(): void {
    this.postservice.getPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        this.current = data[0];
        this.posts = this.posts.filter(post => {
          const searchTerm1 = this.buscar;
          return post.title||''.toLowerCase().includes(searchTerm1) && post.body||''.toLowerCase().includes(searchTerm1);
        });
      },
      error: (eror: any) => {

      }
    });
  }

}
