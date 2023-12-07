import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/model/post.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MeService } from 'src/app/core/messages.service';
import { PostDeleteService } from 'src/app/core/post-delete.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: Post[];

  edit(post: Post) {
  }

  constructor(private postservice: PostsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private poservice: PostDeleteService) {

  }
  delete(post: Post) {
    this.confirmationService.confirm({
      message: 'Eliminar el registro?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.posts = this.poservice.delete(post, this.posts);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Eliminado' });
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
        console.log('llegaron los datos', this.posts);
      },
      error: (eror: any) => {

      }
    });
  }

}
