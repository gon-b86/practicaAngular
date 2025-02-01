import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interface/ipost.interface';

@Component({
  selector: 'app-post-view',
  imports: [RouterLink],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {
  @Input() idPost: string="";
  postsService = inject(PostsService);
  router = inject(Router);
  post!: IPost;

  ngOnInit() {
    let id: number = Number(this.idPost);
    let response = this.postsService.getById(id);
    if (response) {
      this.post = response;
    } else {
      alert('Id de post no existe')
      this.router.navigate(['/home']);
  }
}
}
