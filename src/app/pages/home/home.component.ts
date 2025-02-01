import { Component, inject } from '@angular/core';
import { IPost } from '../../interface/ipost.interface';
import { PostsService } from '../../services/posts.service';
import { PostCardComponent } from "../../components/post-card/post-card.component";

@Component({
  selector: 'app-home',
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrPosts: IPost[] = [];
  postsServices = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postsServices.getAll();
  }

  searchByTitle(event: string) {
    this.arrPosts = this.postsServices.getByTitle(event);
  }

  searchByCategory(event: string) {
    this.arrPosts = this.postsServices.getByCategory(event);
  }
}
