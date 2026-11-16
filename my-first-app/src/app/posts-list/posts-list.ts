import { Component, OnInit, inject } from '@angular/core';
import { PostItem, PostService } from '../post';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList implements OnInit {
  private postService = inject(PostService);

  posts: PostItem[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Не удалось загрузить посты. Проверьте, запущен ли сервер.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
