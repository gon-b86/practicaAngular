import { Component, inject } from '@angular/core';
import { IPost } from '../../interface/ipost.interface';
import { PostsService } from '../../services/posts.service';
import { PostCardComponent } from "../../components/post-card/post-card.component";
import { PostSearchComponent } from "./post-search/post-search.component";
import { SelectCategoryComponent } from "./select-category/select-category.component";

@Component({
  selector: 'app-home',
  imports: [PostCardComponent, PostSearchComponent, SelectCategoryComponent],
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

  selectByCategory(event: string) {
    this.arrPosts = this.postsServices.getByCategory(event);
  }
}
