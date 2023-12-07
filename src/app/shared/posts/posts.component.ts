import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  
  constructor(private postservice: PostsService) {

  }
  ngOnInit(): void {
    this.postservice.getPosts().subscribe({
      next: data => {
        this.posts = data;
        console.log('llegaron los datos', this.posts);
      },
      error: eror => {

      }
    });
  }

}
